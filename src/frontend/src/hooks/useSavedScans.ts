import { useState, useEffect, useCallback } from 'react';

export interface SavedScan {
  id: string;
  imageDataUrl: string;
  createdAt: number;
  tags?: string[];
}

const STORAGE_KEY = 'pest-scanner-saved-scans';

export function useSavedScans() {
  const [savedScans, setSavedScans] = useState<SavedScan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load saved scans from localStorage on mount with backward compatibility
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as SavedScan[];
        // Ensure backward compatibility: add empty tags array if missing
        const migratedScans = parsed.map(scan => ({
          ...scan,
          tags: scan.tags || []
        }));
        setSavedScans(migratedScans);
      }
    } catch (error) {
      console.error('Error loading saved scans:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save to localStorage whenever savedScans changes
  const persistScans = useCallback((scans: SavedScan[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(scans));
    } catch (error) {
      console.error('Error persisting saved scans:', error);
    }
  }, []);

  const saveScan = useCallback((imageDataUrl: string) => {
    const newScan: SavedScan = {
      id: `scan-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      imageDataUrl,
      createdAt: Date.now(),
      tags: [],
    };

    setSavedScans((prev) => {
      const updated = [newScan, ...prev];
      persistScans(updated);
      return updated;
    });

    return newScan.id;
  }, [persistScans]);

  const deleteScan = useCallback((id: string) => {
    setSavedScans((prev) => {
      const updated = prev.filter((scan) => scan.id !== id);
      persistScans(updated);
      return updated;
    });
  }, [persistScans]);

  const moveScan = useCallback((id: string, direction: 'up' | 'down') => {
    setSavedScans((prev) => {
      const currentIndex = prev.findIndex((scan) => scan.id === id);
      
      // Invalid index or invalid move
      if (currentIndex === -1) return prev;
      if (direction === 'up' && currentIndex === 0) return prev;
      if (direction === 'down' && currentIndex === prev.length - 1) return prev;

      // Create a new array and swap items
      const updated = [...prev];
      const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
      
      // Swap the items
      [updated[currentIndex], updated[targetIndex]] = [updated[targetIndex], updated[currentIndex]];
      
      persistScans(updated);
      return updated;
    });
  }, [persistScans]);

  const addTag = useCallback((id: string, tag: string) => {
    setSavedScans((prev) => {
      const updated = prev.map((scan) => {
        if (scan.id === id) {
          const currentTags = scan.tags || [];
          // Avoid duplicate tags
          if (!currentTags.includes(tag)) {
            return { ...scan, tags: [...currentTags, tag] };
          }
        }
        return scan;
      });
      persistScans(updated);
      return updated;
    });
  }, [persistScans]);

  const removeTag = useCallback((id: string, tag: string) => {
    setSavedScans((prev) => {
      const updated = prev.map((scan) => {
        if (scan.id === id) {
          const currentTags = scan.tags || [];
          return { ...scan, tags: currentTags.filter(t => t !== tag) };
        }
        return scan;
      });
      persistScans(updated);
      return updated;
    });
  }, [persistScans]);

  const updateTag = useCallback((id: string, oldTag: string, newTag: string) => {
    setSavedScans((prev) => {
      const updated = prev.map((scan) => {
        if (scan.id === id) {
          const currentTags = scan.tags || [];
          return { 
            ...scan, 
            tags: currentTags.map(t => t === oldTag ? newTag : t) 
          };
        }
        return scan;
      });
      persistScans(updated);
      return updated;
    });
  }, [persistScans]);

  const setTags = useCallback((id: string, tags: string[]) => {
    setSavedScans((prev) => {
      const updated = prev.map((scan) => {
        if (scan.id === id) {
          return { ...scan, tags };
        }
        return scan;
      });
      persistScans(updated);
      return updated;
    });
  }, [persistScans]);

  const getScan = useCallback((id: string): SavedScan | undefined => {
    return savedScans.find((scan) => scan.id === id);
  }, [savedScans]);

  return {
    savedScans,
    isLoading,
    saveScan,
    deleteScan,
    moveScan,
    addTag,
    removeTag,
    updateTag,
    setTags,
    getScan,
  };
}
