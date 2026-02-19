import { useState, useEffect } from 'react';

/**
 * Custom hook for hash-based routing without adding router dependencies.
 * Normalizes incoming hashes (e.g., convert "qr" to "/qr", ensure leading slash).
 * Listens to hash changes and provides current route and navigation helpers.
 */

function normalizeHash(hash: string): string {
  // Remove leading # if present
  let normalized = hash.startsWith('#') ? hash.slice(1) : hash;
  
  // Ensure leading slash
  if (!normalized.startsWith('/')) {
    normalized = '/' + normalized;
  }
  
  // Treat empty as root
  if (normalized === '/') {
    return '/';
  }
  
  return normalized;
}

export function useHashRoute() {
  const [currentHash, setCurrentHash] = useState(() => {
    if (typeof window !== 'undefined') {
      return normalizeHash(window.location.hash);
    }
    return '/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(normalizeHash(window.location.hash));
    };

    // Handle initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    const normalized = normalizeHash(path);
    window.location.hash = normalized;
  };

  const goBack = () => {
    window.location.hash = '/';
  };

  return {
    currentHash,
    navigate,
    goBack,
    isRoute: (route: string) => currentHash === normalizeHash(route),
  };
}
