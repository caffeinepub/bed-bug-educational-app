/**
 * Safe localStorage wrapper that catches quota/disabled errors.
 * Returns non-throwing results and provides availability detection.
 */

export interface StorageResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Checks if localStorage is available and working.
 */
export function isStorageAvailable(): boolean {
  try {
    const testKey = '__storage_test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

/**
 * Safely gets an item from localStorage.
 */
export function getItem<T>(key: string): StorageResult<T> {
  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      return { success: true, data: undefined };
    }
    const data = JSON.parse(item) as T;
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      error: 'Failed to read from storage',
    };
  }
}

/**
 * Safely sets an item in localStorage.
 */
export function setItem<T>(key: string, value: T): StorageResult<void> {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: 'Failed to save to storage. Storage may be full or disabled.',
    };
  }
}

/**
 * Safely removes an item from localStorage.
 */
export function removeItem(key: string): StorageResult<void> {
  try {
    localStorage.removeItem(key);
    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: 'Failed to remove from storage',
    };
  }
}
