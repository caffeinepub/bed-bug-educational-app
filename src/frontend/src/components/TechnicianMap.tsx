import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Technician } from "../backend";
import { useGoogleMaps } from "../hooks/useGoogleMaps";
import type { ZipBoundaryCoordinate } from "../hooks/useQueries";

interface TechnicianMapProps {
  technicians: Technician[];
  boundaryCoordinates?: ZipBoundaryCoordinate[] | null;
  isBoundaryLoading?: boolean;
  boundaryError?: boolean;
}

export function TechnicianMap({
  technicians,
  boundaryCoordinates,
  isBoundaryLoading,
  boundaryError,
}: TechnicianMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const polygonRef = useRef<google.maps.Polygon | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const { isLoaded, loadError } = useGoogleMaps();
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || technicians.length === 0) {
      return;
    }

    try {
      // Clear existing markers
      for (const marker of markersRef.current) marker.setMap(null);
      markersRef.current = [];

      // Clear existing polygon
      if (polygonRef.current) {
        polygonRef.current.setMap(null);
        polygonRef.current = null;
      }

      // Calculate bounds including both technicians and boundary
      const bounds = new google.maps.LatLngBounds();

      // Add technician locations to bounds
      for (const tech of technicians) {
        bounds.extend(new google.maps.LatLng(tech.latitude, tech.longitude));
      }

      // Add boundary coordinates to bounds if available
      if (boundaryCoordinates && boundaryCoordinates.length > 0) {
        console.log(
          `Adding ${boundaryCoordinates.length} boundary coordinates to map`,
        );
        for (const coord of boundaryCoordinates) {
          if (
            typeof coord.latitude === "number" &&
            typeof coord.longitude === "number"
          ) {
            bounds.extend(
              new google.maps.LatLng(coord.latitude, coord.longitude),
            );
          } else {
            console.warn("Invalid coordinate format:", coord);
          }
        }
      }

      const center = bounds.getCenter();

      // Create or update map
      if (!mapInstanceRef.current) {
        mapInstanceRef.current = new google.maps.Map(mapRef.current, {
          center: { lat: center.lat(), lng: center.lng() },
          zoom: 10,
          mapTypeControl: true,
          streetViewControl: false,
          fullscreenControl: true,
        });

        // Create info window
        infoWindowRef.current = new google.maps.InfoWindow();
      }

      // Render zip code boundary polygon if available
      if (
        boundaryCoordinates &&
        boundaryCoordinates.length > 0 &&
        mapInstanceRef.current
      ) {
        try {
          const polygonPath = boundaryCoordinates
            .filter(
              (coord) =>
                typeof coord.latitude === "number" &&
                typeof coord.longitude === "number",
            )
            .map((coord) => ({
              lat: coord.latitude,
              lng: coord.longitude,
            }));

          console.log(
            `Creating polygon with ${polygonPath.length} valid coordinates`,
          );

          if (polygonPath.length > 0) {
            polygonRef.current = new google.maps.Polygon({
              paths: polygonPath,
              strokeColor: "#2563eb",
              strokeOpacity: 1.0,
              strokeWeight: 2,
              fillColor: "#3b82f6",
              fillOpacity: 0.2,
              map: mapInstanceRef.current,
            });
            console.log("Polygon successfully created and added to map");
          } else {
            console.warn("No valid coordinates to create polygon");
          }
        } catch (polygonError) {
          console.error("Error creating polygon:", polygonError);
        }
      } else {
        console.log("No boundary coordinates available for polygon rendering");
      }

      // Fit bounds to show all markers and polygon
      mapInstanceRef.current.fitBounds(bounds);

      // Add markers for each technician
      for (const tech of technicians) {
        const marker = new google.maps.Marker({
          position: { lat: tech.latitude, lng: tech.longitude },
          map: mapInstanceRef.current,
          title: tech.businessName,
          animation: google.maps.Animation.DROP,
        });

        // Add click listener to show info window
        marker.addListener("click", () => {
          const contentString = `
            <div style="padding: 8px; max-width: 300px;">
              <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1a1a1a;">
                ${tech.businessName}
              </h3>
              <div style="margin-bottom: 6px;">
                <strong style="font-size: 14px; color: #4a4a4a;">Phone:</strong>
                <a href="tel:${tech.phoneNumber}" style="font-size: 14px; color: #2563eb; text-decoration: none; margin-left: 4px;">
                  ${tech.phoneNumber}
                </a>
              </div>
              <div style="margin-bottom: 6px;">
                <strong style="font-size: 14px; color: #4a4a4a;">Location:</strong>
                <span style="font-size: 14px; color: #6b6b6b; margin-left: 4px;">
                  ${tech.address}
                </span>
              </div>
              <div style="font-size: 14px; color: #6b6b6b;">
                ${tech.city && tech.city !== "unknown" ? `${tech.city}, ` : ""}${tech.state && tech.state !== "unknown" ? `${tech.state} ` : ""}${tech.zipCode}
              </div>
              ${
                tech.specialties
                  ? `
                <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e5e5e5;">
                  <strong style="font-size: 14px; color: #4a4a4a;">Specialties:</strong>
                  <div style="font-size: 14px; color: #6b6b6b; margin-top: 4px;">
                    ${tech.specialties}
                  </div>
                </div>
              `
                  : ""
              }
            </div>
          `;

          if (infoWindowRef.current && mapInstanceRef.current) {
            infoWindowRef.current.setContent(contentString);
            infoWindowRef.current.open(mapInstanceRef.current, marker);
          }
        });

        markersRef.current.push(marker);
      }

      setMapError(null);
    } catch (err) {
      console.error("Error initializing map:", err);
      setMapError("Failed to initialize map. Please try again.");
    }

    // Cleanup function
    return () => {
      for (const marker of markersRef.current) marker.setMap(null);
      markersRef.current = [];

      if (polygonRef.current) {
        polygonRef.current.setMap(null);
        polygonRef.current = null;
      }
    };
  }, [isLoaded, technicians, boundaryCoordinates]);

  if (loadError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Failed to load Google Maps. Please check your internet connection and
          try again.
        </AlertDescription>
      </Alert>
    );
  }

  if (mapError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>{mapError}</AlertDescription>
      </Alert>
    );
  }

  if (!isLoaded) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <div className="mb-2 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" />
              <p className="text-sm text-muted-foreground">Loading map...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (technicians.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="py-8 text-center">
            <MapPin className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              No technicians with GPS coordinates available to display on map.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="relative p-0">
        <div
          ref={mapRef}
          className="h-[500px] w-full rounded-lg"
          style={{ minHeight: "500px" }}
        />
        {isBoundaryLoading && (
          <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-md bg-background/90 px-3 py-2 text-sm shadow-md">
            Loading zip code area...
          </div>
        )}
        {boundaryError && !isBoundaryLoading && (
          <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive shadow-md">
            Unable to load zip code boundary
          </div>
        )}
      </CardContent>
    </Card>
  );
}
