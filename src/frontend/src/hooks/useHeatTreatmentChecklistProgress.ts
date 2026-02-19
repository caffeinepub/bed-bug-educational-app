import { useState, useEffect, useCallback } from 'react';
import * as safeStorage from '@/utils/safeStorage';

const STORAGE_KEY = 'heat-treatment-checklist-progress';

export interface ChecklistProgress {
  [itemId: string]: boolean;
}

export function useHeatTreatmentChecklistProgress() {
  const [progress, setProgress] = useState<ChecklistProgress>({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPersistenceAvailable, setIsPersistenceAvailable] = useState(true);

  // Load progress from localStorage on mount
  useEffect(() => {
    const available = safeStorage.isStorageAvailable();
    setIsPersistenceAvailable(available);

    if (available) {
      const result = safeStorage.getItem<ChecklistProgress>(STORAGE_KEY);
      if (result.success && result.data) {
        setProgress(result.data);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever progress changes
  const persistProgress = useCallback((newProgress: ChecklistProgress) => {
    if (isPersistenceAvailable) {
      const result = safeStorage.setItem(STORAGE_KEY, newProgress);
      if (!result.success) {
        console.error('Failed to persist checklist progress:', result.error);
        setIsPersistenceAvailable(false);
      }
    }
  }, [isPersistenceAvailable]);

  const toggleItem = useCallback((itemId: string) => {
    setProgress(prev => {
      const newProgress = {
        ...prev,
        [itemId]: !prev[itemId],
      };
      persistProgress(newProgress);
      return newProgress;
    });
  }, [persistProgress]);

  const isItemCompleted = useCallback((itemId: string): boolean => {
    return progress[itemId] === true;
  }, [progress]);

  const resetAll = useCallback(() => {
    setProgress({});
    persistProgress({});
  }, [persistProgress]);

  const getCompletionStats = useCallback((allItemIds: string[]) => {
    const completed = allItemIds.filter(id => progress[id] === true).length;
    const total = allItemIds.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      completed,
      total,
      percentage,
    };
  }, [progress]);

  return {
    toggleItem,
    isItemCompleted,
    resetAll,
    getCompletionStats,
    isLoaded,
    isPersistenceAvailable,
  };
}
