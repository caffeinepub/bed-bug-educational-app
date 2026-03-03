import { useQuery } from "@tanstack/react-query";
import type { ContentType, PrintableGuide, Technician } from "../backend";
import { useActor } from "./useActor";

// Printable Guides Queries
export function useGuidesByContentType(contentType: ContentType) {
  const { actor, isFetching } = useActor();

  return useQuery<PrintableGuide[]>({
    queryKey: ["guides", contentType],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGuidesByContentType(contentType);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllGuides() {
  const { actor, isFetching } = useActor();

  return useQuery<PrintableGuide[]>({
    queryKey: ["guides", "all"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllGuides();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGuide(id: string) {
  const { actor, isFetching } = useActor();

  return useQuery<PrintableGuide | null>({
    queryKey: ["guide", id],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getGuide(id);
    },
    enabled: !!actor && !isFetching && !!id,
  });
}

// Technician Queries
export function useTechniciansByZip(zipCode: bigint | null) {
  const { actor, isFetching } = useActor();

  return useQuery<Technician[]>({
    queryKey: ["technicians", zipCode?.toString()],
    queryFn: async () => {
      if (!actor || zipCode === null) return [];
      return actor.getTechniciansByZip(zipCode);
    },
    enabled: !!actor && !isFetching && zipCode !== null,
  });
}

// Zip Code Boundary Query
export interface ZipBoundaryCoordinate {
  latitude: number;
  longitude: number;
}

export function useZipCodeBoundary(
  zipCode: bigint | null,
  stateAbbr: string | null,
) {
  const { actor, isFetching } = useActor();

  return useQuery<ZipBoundaryCoordinate[] | null>({
    queryKey: ["zipBoundary", zipCode?.toString(), stateAbbr],
    queryFn: async () => {
      if (!actor || zipCode === null || !stateAbbr) return null;

      try {
        console.log(
          `Fetching boundary for zip: ${zipCode}, state: ${stateAbbr}`,
        );

        // Call the correct backend method name
        const response = await actor.fetchZipCodeBoundary(zipCode, stateAbbr);

        console.log("Raw boundary response:", response);

        if (!response || response === "null" || response.length === 0) {
          console.warn("No boundary data returned from backend");
          return null;
        }

        const parsed = JSON.parse(response);
        console.log("Parsed boundary data:", parsed);

        // Handle the response structure from the backend
        if (
          parsed.boundaryCoordinates &&
          Array.isArray(parsed.boundaryCoordinates)
        ) {
          console.log(
            `Successfully parsed ${parsed.boundaryCoordinates.length} boundary coordinates`,
          );
          return parsed.boundaryCoordinates;
        }

        console.warn("Boundary coordinates not found in expected format");
        return null;
      } catch (error) {
        console.error("Error fetching zip code boundary:", error);
        return null;
      }
    },
    enabled: !!actor && !isFetching && zipCode !== null && !!stateAbbr,
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
    retry: 2,
  });
}
