import { useState, useRef, useEffect } from 'react';
import { Copy, Download, ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useHashRoute } from '@/hooks/useHashRoute';
import { getShareableUrl } from '@/utils/shareUrl';
import { copyToClipboard } from '@/utils/clipboard';
import { buildQrImageUrl, downloadQrCode } from '@/utils/qr';

export function QrCodePage() {
  const [appUrl, setAppUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [copyError, setCopyError] = useState('');
  const [downloadError, setDownloadError] = useState('');
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');
  const [qrLoadError, setQrLoadError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { goBack } = useHashRoute();

  // Get the app URL from the current window location
  useEffect(() => {
    const url = getShareableUrl();
    setAppUrl(url);
  }, []);

  // Generate QR code when URL changes
  useEffect(() => {
    if (!appUrl) return;

    const generateQRCode = async () => {
      setIsLoading(true);
      setQrLoadError(false);
      try {
        const qrApiUrl = buildQrImageUrl(appUrl, 400);
        setQrCodeDataUrl(qrApiUrl);
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to generate QR code:', err);
        setQrLoadError(true);
        setIsLoading(false);
      }
    };

    generateQRCode();
  }, [appUrl]);

  // Focus management: focus the title when page opens
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  const handleCopyLink = async () => {
    setCopySuccess(false);
    setCopyError('');

    const result = await copyToClipboard(appUrl);
    
    if (result.success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    } else {
      setCopyError(result.error || 'Failed to copy link');
    }
  };

  const handleDownloadQRCode = async () => {
    if (!qrCodeDataUrl) return;

    setIsDownloading(true);
    setDownloadError('');

    const result = await downloadQrCode(qrCodeDataUrl, 'pest-id-guide-qr-code.png');
    
    setIsDownloading(false);

    if (!result.success) {
      setDownloadError(result.error || 'Failed to download QR code');
    }
  };

  const handleRetryQr = () => {
    if (appUrl) {
      setQrLoadError(false);
      setIsLoading(true);
      const qrApiUrl = buildQrImageUrl(appUrl, 400);
      setQrCodeDataUrl(qrApiUrl);
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-2xl py-8">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={goBack}
          className="gap-2"
          aria-label="Go back to main app"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle ref={titleRef} tabIndex={-1} className="text-2xl focus:outline-none">
            Share this App
          </CardTitle>
          <CardDescription>
            Share this pest identification and guide app with others by scanning the QR code or copying the link below.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* QR Code Display */}
          <div className="flex flex-col items-center gap-4">
            <div
              className="rounded-lg border-4 border-background bg-white p-4 shadow-sm"
              aria-label="QR code for app URL"
            >
              {isLoading ? (
                <div className="flex h-[280px] w-[280px] items-center justify-center bg-muted">
                  <p className="text-sm text-muted-foreground">Loading QR code...</p>
                </div>
              ) : qrLoadError ? (
                <div className="flex h-[280px] w-[280px] flex-col items-center justify-center gap-3 bg-muted p-4">
                  <AlertCircle className="h-8 w-8 text-muted-foreground" />
                  <p className="text-center text-sm text-muted-foreground">
                    QR code could not be generated
                  </p>
                  <Button onClick={handleRetryQr} size="sm" variant="outline">
                    Retry
                  </Button>
                </div>
              ) : qrCodeDataUrl ? (
                <img
                  src={qrCodeDataUrl}
                  alt="QR code for Pest ID & Guide app"
                  width={280}
                  height={280}
                  className="h-[280px] w-[280px]"
                  crossOrigin="anonymous"
                  onError={() => setQrLoadError(true)}
                />
              ) : (
                <div className="flex h-[280px] w-[280px] items-center justify-center bg-muted">
                  <p className="text-sm text-muted-foreground">QR code unavailable</p>
                </div>
              )}
            </div>
            {!qrLoadError && (
              <p className="text-center text-sm text-muted-foreground">
                Scan this code with your phone camera to open the app
              </p>
            )}
          </div>

          {/* Error Messages */}
          {qrLoadError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                The QR code could not be generated. The QR service may be unavailable. You can still copy the link below.
              </AlertDescription>
            </Alert>
          )}

          {downloadError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{downloadError}</AlertDescription>
            </Alert>
          )}

          {/* URL Display */}
          <div className="space-y-2">
            <Label htmlFor="app-url" className="text-sm font-medium">
              App URL
            </Label>
            <Input
              id="app-url"
              value={appUrl}
              readOnly
              className="font-mono text-sm"
              aria-label="App URL (read-only)"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={handleCopyLink}
              className="flex-1"
              variant={copySuccess ? 'default' : 'outline'}
              aria-label="Copy link to clipboard"
            >
              {copySuccess ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Link
                </>
              )}
            </Button>

            <Button
              onClick={handleDownloadQRCode}
              className="flex-1"
              variant="outline"
              aria-label="Download QR code as PNG image"
              disabled={isLoading || !qrCodeDataUrl || qrLoadError || isDownloading}
            >
              <Download className="mr-2 h-4 w-4" />
              {isDownloading ? 'Downloading...' : 'Download QR Code'}
            </Button>
          </div>

          {/* Feedback Messages */}
          {copySuccess && (
            <p className="text-center text-sm text-green-600 dark:text-green-400" role="status">
              Link copied to clipboard successfully!
            </p>
          )}
          {copyError && (
            <p className="text-center text-sm text-destructive" role="alert">
              {copyError}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
