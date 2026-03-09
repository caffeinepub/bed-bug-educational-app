import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AlertCircle, ArrowLeft, MapPin, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useGoogleMaps } from "../hooks/useGoogleMaps";

interface SearchResult {
  placeId: string;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}

export function LocationFinder() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const autocompleteRef = useRef<google.maps.places.AutocompleteService | null>(
    null,
  );
  const placesServiceRef = useRef<google.maps.places.PlacesService | null>(
    null,
  );

  const { isLoaded, loadError } = useGoogleMaps();
  const [searchQuery, setSearchQuery] = useState("");
  const [_searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(
    null,
  );

  // Handle back navigation — always go to the home page
  const handleBack = () => {
    window.location.hash = "/";
  };

  // Initialize map
  useEffect(() => {
    if (!isLoaded || !mapRef.current) {
      return;
    }

    try {
      if (!mapInstanceRef.current) {
        // Default center (US center)
        mapInstanceRef.current = new google.maps.Map(mapRef.current, {
          center: { lat: 39.8283, lng: -98.5795 },
          zoom: 4,
          mapTypeControl: true,
          streetViewControl: false,
          fullscreenControl: true,
        });

        // Initialize services
        infoWindowRef.current = new google.maps.InfoWindow();
        autocompleteRef.current = new google.maps.places.AutocompleteService();
        placesServiceRef.current = new google.maps.places.PlacesService(
          mapInstanceRef.current,
        );
      }

      setMapError(null);
    } catch (err) {
      console.error("Error initializing map:", err);
      setMapError("Failed to initialize map. Please try again.");
    }
  }, [isLoaded]);

  // Handle search
  const handleSearch = async () => {
    if (
      !searchQuery.trim() ||
      !autocompleteRef.current ||
      !placesServiceRef.current ||
      !mapInstanceRef.current
    ) {
      return;
    }

    setIsSearching(true);
    setSearchResults([]);
    setSelectedResult(null);

    try {
      // Get place predictions
      autocompleteRef.current.getPlacePredictions(
        {
          input: searchQuery,
          types: ["geocode", "establishment"],
        },
        (predictions, status) => {
          if (
            status !== google.maps.places.PlacesServiceStatus.OK ||
            !predictions
          ) {
            setIsSearching(false);
            if (
              status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS
            ) {
              setMapError("No results found. Try a different search term.");
            } else {
              setMapError("Search failed. Please try again.");
            }
            return;
          }

          // Get details for the first result
          if (
            predictions.length > 0 &&
            placesServiceRef.current &&
            mapInstanceRef.current
          ) {
            const firstPrediction = predictions[0];

            placesServiceRef.current.getDetails(
              {
                placeId: firstPrediction.place_id,
                fields: ["name", "formatted_address", "geometry"],
              },
              (place, detailStatus) => {
                setIsSearching(false);

                if (
                  detailStatus !== google.maps.places.PlacesServiceStatus.OK ||
                  !place ||
                  !place.geometry?.location
                ) {
                  setMapError(
                    "Failed to get location details. Please try again.",
                  );
                  return;
                }

                const result: SearchResult = {
                  placeId: firstPrediction.place_id,
                  name: place.name || "Unknown",
                  address: place.formatted_address || "Address not available",
                  location: {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                  },
                };

                setSearchResults([result]);
                setSelectedResult(result);
                setMapError(null);

                // Add marker and center map
                addMarker(result);
              },
            );
          } else {
            setIsSearching(false);
            setMapError("No results found. Try a different search term.");
          }
        },
      );
    } catch (err) {
      console.error("Search error:", err);
      setIsSearching(false);
      setMapError("Search failed. Please try again.");
    }
  };

  // Add marker to map
  const addMarker = (result: SearchResult) => {
    if (!mapInstanceRef.current) return;

    // Clear existing markers
    for (const marker of markersRef.current) marker.setMap(null);
    markersRef.current = [];

    // Create new marker
    const marker = new google.maps.Marker({
      position: result.location,
      map: mapInstanceRef.current,
      title: result.name,
      animation: google.maps.Animation.DROP,
    });

    // Add click listener
    marker.addListener("click", () => {
      const contentString = `
        <div style="padding: 8px; max-width: 300px;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1a1a1a;">
            ${result.name}
          </h3>
          <div style="font-size: 14px; color: #6b6b6b;">
            ${result.address}
          </div>
        </div>
      `;

      if (infoWindowRef.current && mapInstanceRef.current) {
        infoWindowRef.current.setContent(contentString);
        infoWindowRef.current.open(mapInstanceRef.current, marker);
      }
    });

    markersRef.current.push(marker);

    // Center and zoom map
    mapInstanceRef.current.setCenter(result.location);
    mapInstanceRef.current.setZoom(15);

    // Open info window automatically
    if (infoWindowRef.current) {
      const contentString = `
        <div style="padding: 8px; max-width: 300px;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1a1a1a;">
            ${result.name}
          </h3>
          <div style="font-size: 14px; color: #6b6b6b;">
            ${result.address}
          </div>
        </div>
      `;
      infoWindowRef.current.setContent(contentString);
      infoWindowRef.current.open(mapInstanceRef.current, marker);
    }
  };

  // Handle Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Clear search
  const handleClear = () => {
    setSearchQuery("");
    setSearchResults([]);
    setSelectedResult(null);
    setMapError(null);

    // Clear markers
    for (const marker of markersRef.current) marker.setMap(null);
    markersRef.current = [];

    // Reset map view
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setCenter({ lat: 39.8283, lng: -98.5795 });
      mapInstanceRef.current.setZoom(4);
    }
  };

  if (loadError) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="flex-shrink-0"
              aria-label="Go back"
              data-ocid="location.back.button"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </div>
          <CardTitle className="flex items-center gap-6">
            <Search className="h-6 w-6 flex-shrink-0" />
            <span>Location Finder</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Failed to load Google Maps. Please check your internet connection
              and try again.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  if (!isLoaded) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="flex-shrink-0"
              aria-label="Go back"
              data-ocid="location.back.button"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </div>
          <CardTitle className="flex items-center gap-6">
            <Search className="h-6 w-6 flex-shrink-0" />
            <span>Location Finder</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
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

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className="flex-shrink-0"
            aria-label="Go back"
            data-ocid="location.back.button"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
        <CardTitle className="flex items-center gap-6">
          <Search className="h-6 w-6 flex-shrink-0" />
          <span>Location Finder</span>
        </CardTitle>
        <CardDescription>
          Search for any address, place, or landmark to view it on the map
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search Input */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Enter address, city, or place name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isSearching}
              className="pr-10"
              data-ocid="location.search.input"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={handleClear}
                disabled={isSearching}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <Button
            onClick={handleSearch}
            disabled={!searchQuery.trim() || isSearching}
            className="gap-2"
            data-ocid="location.search.primary_button"
          >
            {isSearching ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
                Searching...
              </>
            ) : (
              <>
                <Search className="h-4 w-4" />
                Search
              </>
            )}
          </Button>
        </div>

        {/* Error Message */}
        {mapError && (
          <Alert variant="destructive" data-ocid="location.search.error_state">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{mapError}</AlertDescription>
          </Alert>
        )}

        {/* Selected Result Info */}
        {selectedResult && (
          <div className="rounded-lg border bg-muted/50 p-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold break-words">
                  {selectedResult.name}
                </h4>
                <p className="text-sm text-muted-foreground mt-1 break-words">
                  {selectedResult.address}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Map */}
        <div className="relative">
          <div
            ref={mapRef}
            className="h-[500px] w-full rounded-lg border"
            style={{ minHeight: "500px" }}
            data-ocid="location.map_marker"
          />
        </div>
      </CardContent>
    </Card>
  );
}
