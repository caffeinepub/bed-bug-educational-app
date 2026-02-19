/**
 * QR code generation and download utilities.
 * Provides safe download routine with user-facing error messages.
 */

export interface QrResult {
  success: boolean;
  error?: string;
}

/**
 * Builds the external QR image URL using a public API service.
 */
export function buildQrImageUrl(data: string, size: number = 400): string {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}&format=png&margin=10`;
}

/**
 * Downloads a QR code image from a URL.
 */
export async function downloadQrCode(imageUrl: string, filename: string = 'qr-code.png'): Promise<QrResult> {
  try {
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      return {
        success: false,
        error: 'Failed to download QR code. The QR service may be unavailable. Please try again later.',
      };
    }

    const blob = await response.blob();
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);

    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: 'Failed to download QR code. Please check your internet connection and try again.',
    };
  }
}
