/**
 * Utility for computing the shareable app URL.
 * Ensures consistency between Share dialog and QR page.
 */

/**
 * Gets the shareable app URL (origin without hash).
 */
export function getShareableUrl(): string {
  if (typeof window === 'undefined') {
    return '';
  }
  return window.location.origin;
}

/**
 * Gets the full app URL including the current hash.
 */
export function getFullAppUrl(): string {
  if (typeof window === 'undefined') {
    return '';
  }
  return window.location.href;
}
