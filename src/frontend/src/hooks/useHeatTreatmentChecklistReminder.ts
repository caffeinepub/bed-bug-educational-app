import { useState, useEffect, useCallback } from 'react';
import * as safeStorage from '@/utils/safeStorage';

const STORAGE_KEY = 'heat-treatment-checklist-reminder-confirmed';

export function useHeatTreatmentChecklistReminder() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPersistenceAvailable, setIsPersistenceAvailable] = useState(true);

  // Load confirmation state from localStorage on mount
  useEffect(() => {
    const available = safeStorage.isStorageAvailable();
    setIsPersistenceAvailable(available);

    if (available) {
      const result = safeStorage.getItem<boolean>(STORAGE_KEY);
      if (result.success && result.data === true) {
        setIsConfirmed(true);
      } else {
        // Show reminder on first visit
        setIsReminderOpen(true);
      }
    } else {
      // If storage is unavailable, show reminder but allow in-memory confirmation
      setIsReminderOpen(true);
    }
    setIsLoaded(true);
  }, []);

  const confirm = useCallback(() => {
    setIsConfirmed(true);
    setIsReminderOpen(false);
    
    if (isPersistenceAvailable) {
      const result = safeStorage.setItem(STORAGE_KEY, true);
      if (!result.success) {
        console.error('Failed to persist reminder confirmation:', result.error);
        setIsPersistenceAvailable(false);
      }
    }
  }, [isPersistenceAvailable]);

  const cancel = useCallback(() => {
    setIsReminderOpen(false);
  }, []);

  const showReminder = useCallback(() => {
    setIsReminderOpen(true);
  }, []);

  return {
    isConfirmed,
    isReminderOpen,
    isLoaded,
    isPersistenceAvailable,
    confirm,
    cancel,
    showReminder,
  };
}
