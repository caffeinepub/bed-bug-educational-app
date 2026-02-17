import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'heat-treatment-checklist-v1';

interface ChecklistState {
  [itemId: string]: boolean;
}

export function useHeatTreatmentChecklistProgress() {
  const [completedItems, setCompletedItems] = useState<ChecklistState>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setCompletedItems(parsed);
      }
    } catch (error) {
      console.error('Failed to load checklist progress:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(completedItems));
      } catch (error) {
        console.error('Failed to save checklist progress:', error);
      }
    }
  }, [completedItems, isLoaded]);

  const toggleItem = useCallback((itemId: string) => {
    setCompletedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  }, []);

  const isItemCompleted = useCallback(
    (itemId: string): boolean => {
      return completedItems[itemId] || false;
    },
    [completedItems]
  );

  const resetAll = useCallback(() => {
    setCompletedItems({});
  }, []);

  const getCompletionStats = useCallback(
    (itemIds: string[]) => {
      const completed = itemIds.filter((id) => completedItems[id]).length;
      return {
        completed,
        total: itemIds.length,
        percentage: itemIds.length > 0 ? Math.round((completed / itemIds.length) * 100) : 0,
      };
    },
    [completedItems]
  );

  return {
    toggleItem,
    isItemCompleted,
    resetAll,
    getCompletionStats,
    isLoaded,
  };
}
