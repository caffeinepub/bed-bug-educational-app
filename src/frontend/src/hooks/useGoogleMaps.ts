import { useEffect, useState } from "react";

interface UseGoogleMapsReturn {
  isLoaded: boolean;
  loadError: Error | null;
}

// Google Maps API key - in production, this should be in environment variables
const GOOGLE_MAPS_API_KEY = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

let isScriptLoading = false;
let isScriptLoaded = false;
let scriptLoadError: Error | null = null;
const loadCallbacks: Array<(error: Error | null) => void> = [];

function loadGoogleMapsScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // If already loaded, resolve immediately
    if (isScriptLoaded) {
      resolve();
      return;
    }

    // If there was a previous error, reject immediately
    if (scriptLoadError) {
      reject(scriptLoadError);
      return;
    }

    // Add callback to queue
    loadCallbacks.push((error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });

    // If already loading, just wait for callbacks
    if (isScriptLoading) {
      return;
    }

    // Start loading
    isScriptLoading = true;

    // Check if script already exists
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      isScriptLoaded = true;
      isScriptLoading = false;
      for (const cb of loadCallbacks) cb(null);
      loadCallbacks.length = 0;
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      isScriptLoaded = true;
      isScriptLoading = false;
      for (const cb of loadCallbacks) cb(null);
      loadCallbacks.length = 0;
    };

    script.onerror = () => {
      const error = new Error("Failed to load Google Maps script");
      scriptLoadError = error;
      isScriptLoading = false;
      for (const cb of loadCallbacks) cb(error);
      loadCallbacks.length = 0;
    };

    document.head.appendChild(script);
  });
}

export function useGoogleMaps(): UseGoogleMapsReturn {
  const [isLoaded, setIsLoaded] = useState(isScriptLoaded);
  const [loadError, setLoadError] = useState<Error | null>(scriptLoadError);

  useEffect(() => {
    if (isScriptLoaded) {
      setIsLoaded(true);
      return;
    }

    if (scriptLoadError) {
      setLoadError(scriptLoadError);
      return;
    }

    loadGoogleMapsScript()
      .then(() => {
        setIsLoaded(true);
        setLoadError(null);
      })
      .catch((error) => {
        setLoadError(error);
        setIsLoaded(false);
      });
  }, []);

  return { isLoaded, loadError };
}
