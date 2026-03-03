// Type declarations for Google Maps JavaScript API
// This allows TypeScript to recognize the google namespace when the script is loaded at runtime

declare namespace google {
  namespace maps {
    // biome-ignore lint/suspicious/noShadowRestrictedNames: Google Maps API requires `Map` class name
    class Map {
      constructor(mapDiv: HTMLElement, opts?: MapOptions);
      fitBounds(bounds: LatLngBounds | LatLngBoundsLiteral): void;
      getCenter(): LatLng;
      getZoom(): number;
      setCenter(latlng: LatLng | LatLngLiteral): void;
      setZoom(zoom: number): void;
    }

    class Marker {
      constructor(opts?: MarkerOptions);
      setMap(map: Map | null): void;
      addListener(eventName: string, handler: () => void): void;
    }

    class InfoWindow {
      constructor(opts?: InfoWindowOptions);
      close(): void;
      open(map?: Map, anchor?: Marker): void;
      setContent(content: string | HTMLElement): void;
    }

    class Polygon {
      constructor(opts?: PolygonOptions);
      setMap(map: Map | null): void;
      getPaths(): any;
      getPath(): any;
    }

    class LatLng {
      constructor(lat: number, lng: number);
      lat(): number;
      lng(): number;
    }

    class LatLngBounds {
      constructor();
      extend(point: LatLng | LatLngLiteral): void;
      getCenter(): LatLng;
    }

    interface MapOptions {
      center?: LatLng | LatLngLiteral;
      zoom?: number;
      mapTypeControl?: boolean;
      streetViewControl?: boolean;
      fullscreenControl?: boolean;
    }

    interface MarkerOptions {
      position?: LatLng | LatLngLiteral;
      map?: Map | null;
      title?: string;
      animation?: Animation;
    }

    interface InfoWindowOptions {
      content?: string | HTMLElement;
    }

    interface PolygonOptions {
      paths?: LatLng[] | LatLngLiteral[] | LatLng[][] | LatLngLiteral[][];
      strokeColor?: string;
      strokeOpacity?: number;
      strokeWeight?: number;
      fillColor?: string;
      fillOpacity?: number;
      map?: Map | null;
      clickable?: boolean;
      draggable?: boolean;
      editable?: boolean;
      geodesic?: boolean;
      visible?: boolean;
      zIndex?: number;
    }

    interface LatLngLiteral {
      lat: number;
      lng: number;
    }

    interface LatLngBoundsLiteral {
      east: number;
      north: number;
      south: number;
      west: number;
    }

    enum Animation {
      BOUNCE = 1,
      DROP = 2,
    }

    namespace places {
      class AutocompleteService {
        constructor();
        getPlacePredictions(
          request: AutocompletionRequest,
          callback: (
            predictions: AutocompletePrediction[] | null,
            status: PlacesServiceStatus,
          ) => void,
        ): void;
      }

      class PlacesService {
        constructor(attrContainer: HTMLDivElement | Map);
        getDetails(
          request: PlaceDetailsRequest,
          callback: (
            place: PlaceResult | null,
            status: PlacesServiceStatus,
          ) => void,
        ): void;
      }

      interface AutocompletionRequest {
        input: string;
        types?: string[];
        bounds?: LatLngBounds | LatLngBoundsLiteral;
        componentRestrictions?: ComponentRestrictions;
        location?: LatLng | LatLngLiteral;
        offset?: number;
        radius?: number;
      }

      interface AutocompletePrediction {
        description: string;
        place_id: string;
        structured_formatting?: {
          main_text: string;
          secondary_text: string;
        };
        terms?: Array<{ offset: number; value: string }>;
        types?: string[];
      }

      interface PlaceDetailsRequest {
        placeId: string;
        fields?: string[];
      }

      interface PlaceResult {
        name?: string;
        formatted_address?: string;
        geometry?: {
          location: LatLng;
          viewport?: LatLngBounds;
        };
        place_id?: string;
        types?: string[];
      }

      interface ComponentRestrictions {
        country?: string | string[];
      }

      enum PlacesServiceStatus {
        OK = "OK",
        ZERO_RESULTS = "ZERO_RESULTS",
        INVALID_REQUEST = "INVALID_REQUEST",
        OVER_QUERY_LIMIT = "OVER_QUERY_LIMIT",
        REQUEST_DENIED = "REQUEST_DENIED",
        UNKNOWN_ERROR = "UNKNOWN_ERROR",
        NOT_FOUND = "NOT_FOUND",
      }
    }
  }
}
