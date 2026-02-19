import { useState, useEffect, useCallback } from 'react';
import * as safeStorage from '@/utils/safeStorage';

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
  const [isPersistenceAvailable, setIsPersistenceAvailable] = useState(true);

  // Load saved scans from localStorage on mount with backward compatibility
  useEffect(() => {
    const available = safeStorage.isStorageAvailable();
    setIsPersistenceAvailable(available);

    if (available) {
      const result = safeStorage.getItem<SavedScan[]>(STORAGE_KEY);
      if (result.success && result.data) {
        // Ensure backward compatibility: add empty tags array if missing
        const migratedScans = result.data.map(scan => ({
          ...scan,
          tags: scan.tags || []
        }));
        setSavedScans(migratedScans);
      }
    }
    setIsLoading(false);
  }, []);

  // Save to localStorage whenever savedScans changes
  const persistScans = useCallback((scans: SavedScan[]) => {
    if (isPersistenceAvailable) {
      const result = safeStorage.setItem(STORAGE_KEY, scans);
      if (!result.success) {
        console.error('Failed to persist scans:', result.error);
        setIsPersistenceAvailable(false);
      }
    }
  }, [isPersistenceAvailable]);

  const saveScan = useCallback((imageDataUrl: string): string => {
    const newScan: SavedScan = {
      id: `scan-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      imageDataUrl,
      createdAt: Date.now(),
      tags: [],
    };
    const updatedScans = [newScan, ...savedScans];
    setSavedScans(updatedScans);
    persistScans(updatedScans);
    return newScan.id;
  }, [savedScans, persistScans]);

  const deleteScan = useCallback((id: string) => {
    const updatedScans = savedScans.filter(scan => scan.id !== id);
    setSavedScans(updatedScans);
    persistScans(updatedScans);
  }, [savedScans, persistScans]);

  const moveScan = useCallback((id: string, direction: 'up' | 'down') => {
    const index = savedScans.findIndex(scan => scan.id === id);
    if (index === -1) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= savedScans.length) return;

    const updatedScans = [...savedScans];
    const [movedScan] = updatedScans.splice(index, 1);
    updatedScans.splice(newIndex, 0, movedScan);

    setSavedScans(updatedScans);
    persistScans(updatedScans);
  }, [savedScans, persistScans]);

  const addTag = useCallback((scanId: string, tag: string) => {
    const updatedScans = savedScans.map(scan => {
      if (scan.id === scanId) {
        const tags = scan.tags || [];
        if (!tags.includes(tag)) {
          return { ...scan, tags: [...tags, tag] };
        }
      }
      return scan;
    });
    setSavedScans(updatedScans);
    persistScans(updatedScans);
  }, [savedScans, persistScans]);

  const removeTag = useCallback((scanId: string, tag: string) => {
    const updatedScans = savedScans.map(scan => {
      if (scan.id === scanId) {
        const tags = scan.tags || [];
        return { ...scan, tags: tags.filter(t => t !== tag) };
      }
      return scan;
    });
    setSavedScans(updatedScans);
    persistScans(updatedScans);
  }, [savedScans, persistScans]);

  const updateTag = useCallback((scanId: string, oldTag: string, newTag: string) => {
    const updatedScans = savedScans.map(scan => {
      if (scan.id === scanId) {
        const tags = scan.tags || [];
        return { ...scan, tags: tags.map(t => t === oldTag ? newTag : t) };
      }
      return scan;
    });
    setSavedScans(updatedScans);
    persistScans(updatedScans);
  }, [savedScans, persistScans]);

  return {
    savedScans,
    isLoading,
    isPersistenceAvailable,
    saveScan,
    deleteScan,
    moveScan,
    addTag,
    removeTag,
    updateTag,
  };
}
