/**
 * Safe clipboard helper with fallback support.
 * Returns structured success/failure result for user-visible messaging.
 */

export interface ClipboardResult {
  success: boolean;
  error?: string;
}

/**
 * Attempts to copy text to clipboard using modern API with fallback.
 */
export async function copyToClipboard(text: string): Promise<ClipboardResult> {
  try {
    // Try modern clipboard API first
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return { success: true };
    }

    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (successful) {
        return { success: true };
      }
      return {
        success: false,
        error: "Failed to copy. Please copy the text manually.",
      };
    } catch (_err) {
      document.body.removeChild(textArea);
      return {
        success: false,
        error: "Failed to copy. Please copy the text manually.",
      };
    }
  } catch (_err) {
    return {
      success: false,
      error: "Failed to copy. Please copy the text manually.",
    };
  }
}
