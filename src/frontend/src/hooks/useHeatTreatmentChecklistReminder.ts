import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'heat-treatment-checklist-reminder-confirmed-v1';

export function useHeatTreatmentChecklistReminder() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isReminderOpen, setIsReminderOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load confirmation state from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const confirmed = stored === 'true';
      setIsConfirmed(confirmed);
      // If not confirmed, open the reminder dialog
      if (!confirmed) {
        setIsReminderOpen(true);
      }
    } catch (error) {
      console.error('Failed to load reminder confirmation state:', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save confirmation state to localStorage
  const confirm = useCallback(() => {
    setIsConfirmed(true);
    setIsReminderOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch (error) {
      console.error('Failed to save reminder confirmation:', error);
    }
  }, []);

  // Cancel/dismiss without confirming
  const cancel = useCallback(() => {
    setIsReminderOpen(false);
  }, []);

  // Re-show the reminder (e.g., via "Show reminder" link)
  const showReminder = useCallback(() => {
    setIsReminderOpen(true);
  }, []);

  return {
    isConfirmed,
    isReminderOpen,
    isLoaded,
    confirm,
    cancel,
    showReminder,
  };
}
