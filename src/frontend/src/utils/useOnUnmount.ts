import { useEffect, useRef } from "react";

/**
 * Hook to safely run cleanup logic on unmount.
 * Used to ensure camera streams are stopped when navigating away.
 */
export function useOnUnmount(callback: () => void | Promise<void>) {
  const callbackRef = useRef(callback);

  // Keep callback ref up to date
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Run cleanup on unmount
  useEffect(() => {
    return () => {
      const cleanup = callbackRef.current;
      if (cleanup) {
        // Handle both sync and async cleanup
        const result = cleanup();
        if (result instanceof Promise) {
          result.catch((err) => {
            console.error("Cleanup error:", err);
          });
        }
      }
    };
  }, []);
}
