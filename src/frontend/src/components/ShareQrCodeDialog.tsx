import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useHashRoute } from "@/hooks/useHashRoute";
import { copyToClipboard } from "@/utils/clipboard";
import { buildQrImageUrl, downloadQrCode } from "@/utils/qr";
import { getShareableUrl } from "@/utils/shareUrl";
import {
  AlertCircle,
  Check,
  Copy,
  Download,
  ExternalLink,
  Share2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ShareQrCodeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ShareQrCodeDialog({
  open,
  onOpenChange,
}: ShareQrCodeDialogProps) {
  const [appUrl, setAppUrl] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [copyError, setCopyError] = useState("");
  const [downloadError, setDownloadError] = useState("");
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("");
  const [qrLoadError, setQrLoadError] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const copyButtonRef = useRef<HTMLButtonElement>(null);
  const { navigate } = useHashRoute();

  // Get the app URL from the current window location
  useEffect(() => {
    const url = getShareableUrl();
    setAppUrl(url);
  }, []);

  // Generate QR code when URL changes
  useEffect(() => {
    if (!appUrl) return;

    const generateQRCode = async () => {
      setQrLoadError(false);
      try {
        const qrApiUrl = buildQrImageUrl(appUrl, 400);
        setQrCodeDataUrl(qrApiUrl);
      } catch (err) {
        console.error("Failed to generate QR code:", err);
        setQrLoadError(true);
      }
    };

    generateQRCode();
  }, [appUrl]);

  // Focus management: focus the copy button when dialog opens
  useEffect(() => {
    if (open && copyButtonRef.current) {
      const timer = setTimeout(() => {
        copyButtonRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const handleCopyLink = async () => {
    setCopySuccess(false);
    setCopyError("");

    const result = await copyToClipboard(appUrl);

    if (result.success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    } else {
      setCopyError(result.error || "Failed to copy link");
    }
  };

  const handleDownloadQRCode = async () => {
    if (!qrCodeDataUrl) return;

    setIsDownloading(true);
    setDownloadError("");

    const result = await downloadQrCode(
      qrCodeDataUrl,
      "pest-id-guide-qr-code.png",
    );

    setIsDownloading(false);

    if (!result.success) {
      setDownloadError(result.error || "Failed to download QR code");
    }
  };

  const handleOpenFullPage = () => {
    navigate("/qr");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            Share App
          </DialogTitle>
          <DialogDescription>
            Share this app with others by scanning the QR code or copying the
            link.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-4">
          {/* QR Code */}
          <div
            className="rounded-lg border-4 border-background bg-white p-4 shadow-sm"
            aria-label="QR code for app URL"
          >
            {qrLoadError ? (
              <div className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-2 bg-muted">
                <AlertCircle className="h-6 w-6 text-muted-foreground" />
                <p className="text-center text-xs text-muted-foreground">
                  QR code unavailable
                </p>
              </div>
            ) : qrCodeDataUrl ? (
              <img
                src={qrCodeDataUrl}
                alt="QR code for app"
                width={200}
                height={200}
                className="h-[200px] w-[200px]"
                crossOrigin="anonymous"
                onError={() => setQrLoadError(true)}
              />
            ) : (
              <div className="flex h-[200px] w-[200px] items-center justify-center bg-muted">
                <p className="text-sm text-muted-foreground">
                  Loading QR code...
                </p>
              </div>
            )}
          </div>

          {/* Error Messages */}
          {qrLoadError && (
            <Alert variant="destructive" className="w-full">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-xs">
                QR code could not be generated. You can still copy the link
                below.
              </AlertDescription>
            </Alert>
          )}

          {downloadError && (
            <Alert variant="destructive" className="w-full">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-xs">
                {downloadError}
              </AlertDescription>
            </Alert>
          )}

          {/* URL Display */}
          <div className="w-full space-y-2">
            <Label htmlFor="app-url" className="text-sm font-medium">
              App URL
            </Label>
            <div className="flex gap-2">
              <Input
                id="app-url"
                value={appUrl}
                readOnly
                className="flex-1 font-mono text-sm"
                aria-label="App URL"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <Button
              ref={copyButtonRef}
              onClick={handleCopyLink}
              className="flex-1"
              variant={copySuccess ? "default" : "outline"}
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
              aria-label="Download QR code as image"
              disabled={!qrCodeDataUrl || qrLoadError || isDownloading}
            >
              <Download className="mr-2 h-4 w-4" />
              {isDownloading ? "Downloading..." : "Download QR"}
            </Button>
          </div>

          {/* Open Full Page Button */}
          <Button
            onClick={handleOpenFullPage}
            variant="ghost"
            className="w-full gap-2"
            aria-label="Open full QR code page"
          >
            <ExternalLink className="h-4 w-4" />
            Open Full Page
          </Button>

          {/* Feedback Messages */}
          {copyError && (
            <p className="text-sm text-destructive" role="alert">
              {copyError}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
