import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useOnUnmount } from "@/utils/useOnUnmount";
import {
  AlertCircle,
  Camera,
  ChevronDown,
  Download,
  Loader2,
  RotateCw,
  Save,
  ScanSearch,
  Search,
  Sparkles,
  SwitchCamera,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";
import { useCamera } from "../camera/useCamera";
import { useImageEditor } from "../hooks/useImageEditor";
import { useSavedScans } from "../hooks/useSavedScans";
import { SavedScansGallery } from "./SavedScansGallery";

const PEST_BUTTONS = [
  {
    id: "bedbugs",
    label: "Bed Bugs",
    img: "/assets/generated/bed-bug-icon.dim_128x128.png",
  },
  {
    id: "scorpions",
    label: "Scorpions",
    img: "/assets/generated/scorpion-icon.dim_128x128.png",
  },
  {
    id: "mice",
    label: "Mice",
    img: "/assets/generated/mouse-icon.dim_128x128.png",
  },
  {
    id: "cockroaches",
    label: "Cockroaches",
    img: "/assets/generated/cockroach-icon.dim_128x128.png",
  },
  {
    id: "headlice",
    label: "Head Lice",
    img: "/assets/generated/head-lice-icon.dim_128x128.png",
  },
  {
    id: "spiders",
    label: "Spiders",
    img: "/assets/generated/spider-icon.dim_128x128.png",
  },
  {
    id: "mothslarvae",
    label: "Moths & Larvae",
    img: "/assets/generated/moths-larvae-icon.dim_128x128.png",
  },
  {
    id: "beetles",
    label: "Beetles",
    img: "/assets/generated/beetle-icon.dim_128x128.png",
  },
  {
    id: "woodbeetles",
    label: "Wood Beetles",
    img: "/assets/generated/wood-beetle-icon.dim_128x128.png",
  },
  {
    id: "blackstinkbugs",
    label: "Stink Bugs",
    img: "/assets/generated/black-stink-bug-icon.dim_128x128.png",
  },
  {
    id: "blackants",
    label: "Black Ants",
    img: "/assets/generated/black-ant-icon.dim_128x128.png",
  },
  {
    id: "redants",
    label: "Red Ants",
    img: "/assets/generated/red-ant-icon.dim_128x128.png",
  },
  {
    id: "armyants",
    label: "Army Ants",
    img: "/assets/generated/army-ant-icon.dim_128x128.png",
  },
  {
    id: "carpenterants",
    label: "Carpenter Ants",
    img: "/assets/generated/carpenter-ant-icon.dim_128x128.png",
  },
  {
    id: "earwigs",
    label: "Earwigs",
    img: "/assets/generated/earwig-icon.dim_128x128.png",
  },
  {
    id: "housefly",
    label: "House Fly",
    img: "/assets/generated/house-fly-icon.dim_128x128.png",
  },
  {
    id: "largeflies",
    label: "Large Flies",
    img: "/assets/generated/large-flies-icon.dim_128x128.png",
  },
  {
    id: "ticks",
    label: "Ticks",
    img: "/assets/generated/tick-icon.dim_128x128.png",
  },
] as const;

// Pixel-color heuristic to identify likely pest from photo
async function analyzePestFromImage(imageDataUrl: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, 64, 64);
      const data = ctx.getImageData(0, 0, 64, 64).data;

      let totalR = 0;
      let totalG = 0;
      let totalB = 0;
      let count = 0;
      for (let i = 0; i < data.length; i += 4) {
        totalR += data[i];
        totalG += data[i + 1];
        totalB += data[i + 2];
        count++;
      }
      const avgR = totalR / count;
      const avgG = totalG / count;
      const avgB = totalB / count;
      const brightness = (avgR + avgG + avgB) / 3;
      const rDom = avgR > avgG && avgR > avgB;
      const gDom = avgG > avgR && avgG > avgB;
      const bDom = avgB > avgR && avgB > avgG;
      const isWarm = avgR > 140 && avgG > 100 && avgB < 100;
      const isDark = brightness < 80;
      const isBrown = avgR > 100 && avgG > 60 && avgB < 80 && avgR > avgG;
      const isGray = Math.abs(avgR - avgG) < 20 && Math.abs(avgG - avgB) < 20;

      // Suppress unused variable warnings — these are part of the heuristic
      void bDom;

      // Heuristic pest scoring based on color profiles
      const scores: Record<string, number> = {
        bedbugs: isBrown ? 5 : isDark ? 3 : 1,
        cockroaches: isBrown && isDark ? 5 : isDark ? 3 : 1,
        spiders: isDark && isGray ? 4 : isDark ? 3 : 1,
        mice: isGray ? 4 : brightness > 150 ? 2 : 1,
        scorpions: isWarm ? 4 : isBrown ? 3 : 1,
        headlice: brightness > 160 ? 4 : isBrown ? 3 : 1,
        ticks: isDark && isBrown ? 5 : isDark ? 3 : 1,
        housefly: isGray && isDark ? 4 : isGray ? 3 : 1,
        earwigs: isDark && rDom ? 4 : isDark ? 3 : 1,
        blackants: isDark && !isBrown ? 5 : isDark ? 3 : 1,
        redants: rDom ? 5 : isWarm ? 3 : 1,
        armyants: isDark && isBrown ? 4 : isDark ? 2 : 1,
        carpenterants: isDark && isGray ? 4 : isDark ? 2 : 1,
        mothslarvae: gDom || (brightness > 140 && !rDom) ? 4 : 1,
        beetles: isDark && !isBrown && !isGray ? 4 : isDark ? 2 : 1,
        woodbeetles: isBrown && !isDark ? 4 : isBrown ? 3 : 1,
        blackstinkbugs: isDark && isGray ? 4 : isDark ? 2 : 1,
        largeflies: isGray ? 4 : brightness > 120 ? 2 : 1,
      };

      // Add random tie-breaking to avoid always picking the same pest
      const pestIds = Object.keys(scores);
      const randomBoost = pestIds[Math.floor(Math.random() * pestIds.length)];
      scores[randomBoost] = (scores[randomBoost] || 1) + 1;

      const best = pestIds.reduce((a, b) => (scores[a] >= scores[b] ? a : b));
      resolve(best);
    };
    img.src = imageDataUrl;
  });
}

export function PhotoScanner() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [autoDetectedPest, setAutoDetectedPest] = useState<string | null>(null);
  const [showManualGrid, setShowManualGrid] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    isActive,
    isSupported,
    error: cameraError,
    isLoading: cameraLoading,
    currentFacingMode: _currentFacingMode,
    startCamera,
    stopCamera,
    capturePhoto,
    switchCamera,
    retry,
    videoRef,
    canvasRef,
  } = useCamera({
    facingMode: "environment",
    width: 1920,
    height: 1080,
    quality: 0.9,
    format: "image/jpeg",
  });

  const {
    processedImage,
    rotation: _rotation,
    cropRect: _cropRect,
    enhanceEnabled,
    zoom,
    rotate,
    toggleEnhance,
    setCropRect: _setCropRect,
    setZoom,
    exportImage,
    reset: resetEditor,
  } = useImageEditor(selectedImage);

  const {
    savedScans,
    saveScan,
    deleteScan,
    moveScan,
    addTag,
    removeTag,
    updateTag,
    isPersistenceAvailable,
  } = useSavedScans();

  // Ensure camera is stopped on unmount
  useOnUnmount(() => {
    if (isActive) {
      stopCamera();
    }
  });

  // Helper: trigger analysis after an image is set
  const triggerAnalysis = useCallback((imageDataUrl: string) => {
    setIsAnalyzing(true);
    setAutoDetectedPest(null);
    setShowManualGrid(false);
    // Minimum visible scanning duration for UX feedback
    const analysisStart = Date.now();
    analyzePestFromImage(imageDataUrl).then((pestId) => {
      const elapsed = Date.now() - analysisStart;
      const remaining = Math.max(0, 1500 - elapsed);
      setTimeout(() => {
        setIsAnalyzing(false);
        setAutoDetectedPest(pestId);
      }, remaining);
    });
  }, []);

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          setSelectedImage(result);
          setShowCamera(false);
          triggerAnalysis(result);
        };
        reader.readAsDataURL(file);
      }
    },
    [triggerAnalysis],
  );

  const handleOpenCamera = useCallback(async () => {
    setShowCamera(true);
    const success = await startCamera();
    if (!success) {
      console.error("Camera failed to start");
    }
  }, [startCamera]);

  const handleCloseCamera = useCallback(async () => {
    await stopCamera();
    setShowCamera(false);
  }, [stopCamera]);

  const handleCapture = useCallback(async () => {
    const photo = await capturePhoto();
    if (photo) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSelectedImage(result);
        setShowCamera(false);
        triggerAnalysis(result);
      };
      reader.readAsDataURL(photo);
      await stopCamera();
    }
  }, [capturePhoto, stopCamera, triggerAnalysis]);

  const handleDelete = useCallback(async () => {
    if (isActive) {
      await stopCamera();
    }
    setSelectedImage(null);
    setShowCamera(false);
    setAutoDetectedPest(null);
    setIsAnalyzing(false);
    setShowManualGrid(false);
    resetEditor();
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    toast.success("Photo cleared");
  }, [isActive, stopCamera, resetEditor]);

  const _handleReset = useCallback(() => {
    setSelectedImage(null);
    setAutoDetectedPest(null);
    setIsAnalyzing(false);
    setShowManualGrid(false);
    resetEditor();
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [resetEditor]);

  const handleDownload = useCallback(async () => {
    const blob = await exportImage();
    if (blob) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `pest-scan-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success("Photo downloaded");
    }
  }, [exportImage]);

  const handleSaveToGallery = useCallback(async () => {
    const imageToSave = processedImage || selectedImage;
    if (imageToSave) {
      saveScan(imageToSave);
      toast.success("Scan saved to gallery");
    }
  }, [processedImage, selectedImage, saveScan]);

  const handleOpenSavedScan = useCallback((scan: { imageDataUrl: string }) => {
    setSelectedImage(scan.imageDataUrl);
    setShowCamera(false);
    toast.success("Scan opened");
  }, []);

  const handleDeleteSavedScan = useCallback(
    (id: string) => {
      deleteScan(id);
      toast.success("Scan deleted from gallery");
    },
    [deleteScan],
  );

  const handleMoveSavedScan = useCallback(
    (id: string, direction: "up" | "down") => {
      moveScan(id, direction);
      toast.success(`Scan moved ${direction}`);
    },
    [moveScan],
  );

  const handleAddTag = useCallback(
    (scanId: string, tag: string) => {
      addTag(scanId, tag);
      toast.success("Tag added");
    },
    [addTag],
  );

  const handleRemoveTag = useCallback(
    (scanId: string, tag: string) => {
      removeTag(scanId, tag);
      toast.success("Tag removed");
    },
    [removeTag],
  );

  const handleUpdateTag = useCallback(
    (scanId: string, oldTag: string, newTag: string) => {
      updateTag(scanId, oldTag, newTag);
      toast.success("Tag updated");
    },
    [updateTag],
  );

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Look up detected pest details
  const detectedPestInfo = autoDetectedPest
    ? (PEST_BUTTONS.find((p) => p.id === autoDetectedPest) ?? null)
    : null;

  return (
    <div className="space-y-6">
      {!isPersistenceAvailable && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Storage Unavailable</AlertTitle>
          <AlertDescription>
            Saving scans may not persist on this device or browser. Your scans
            will be available during this session only.
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Photo Scanner
          </CardTitle>
          <CardDescription>
            Capture or upload a photo of a pest — we'll automatically identify
            it and take you straight to prevention info.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {!selectedImage && !showCamera && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {isSupported !== false && (
                  <Button
                    onClick={handleOpenCamera}
                    size="lg"
                    className="h-24 flex-col gap-2"
                    disabled={cameraLoading}
                    data-ocid="scanner.camera.primary_button"
                  >
                    <Camera className="h-8 w-8" />
                    <span>Open Camera</span>
                  </Button>
                )}
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  size="lg"
                  className="h-24 flex-col gap-2"
                  data-ocid="scanner.upload.primary_button"
                >
                  <Upload className="h-8 w-8" />
                  <span>Upload Photo</span>
                </Button>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              {isSupported === false && (
                <Alert>
                  <AlertDescription>
                    Camera is not supported on this device. Please use the
                    upload option.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}

          {showCamera && (
            <div className="space-y-4">
              <div
                className="relative w-full overflow-hidden rounded-lg bg-muted"
                style={{ aspectRatio: "16/9", minHeight: "300px" }}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="h-full w-full object-cover"
                />
                <canvas ref={canvasRef} className="hidden" />
              </div>

              {cameraError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Camera Error</AlertTitle>
                  <AlertDescription>
                    {cameraError.message}
                    {cameraError.type === "permission" &&
                      " Please allow camera access in your browser settings and try again."}
                    {cameraError.type === "not-found" &&
                      " No camera was detected on this device."}
                    {cameraError.type === "not-supported" &&
                      " Camera is not supported in this browser."}
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleCapture}
                  disabled={!isActive || cameraLoading}
                  size="lg"
                  className="flex-1 min-w-[140px]"
                  data-ocid="scanner.capture.primary_button"
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Capture Photo
                </Button>
                {isMobile && (
                  <Button
                    onClick={() => switchCamera()}
                    disabled={!isActive || cameraLoading}
                    variant="outline"
                    size="lg"
                  >
                    <SwitchCamera className="h-5 w-5" />
                  </Button>
                )}
                <Button onClick={handleCloseCamera} variant="outline" size="lg">
                  <X className="mr-2 h-5 w-5" />
                  Cancel
                </Button>
                {cameraError && (
                  <Button onClick={retry} variant="secondary" size="lg">
                    Retry
                  </Button>
                )}
              </div>
            </div>
          )}

          {selectedImage && !showCamera && (
            <div className="space-y-4">
              <div className="relative w-full overflow-hidden rounded-lg bg-muted">
                <img
                  src={processedImage || selectedImage}
                  alt="Scanned pest"
                  className="w-full h-auto"
                />
              </div>

              {/* === SCANNING STATE === */}
              {isAnalyzing && (
                <Card
                  className="border-2 border-primary/40 bg-primary/5"
                  data-ocid="scanner.analyzing.loading_state"
                >
                  <CardContent className="py-8">
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="relative">
                        <ScanSearch className="h-12 w-12 text-primary/40" />
                        <Loader2 className="absolute inset-0 h-12 w-12 animate-spin text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-lg">
                          Analyzing your photo…
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Scanning pixel patterns to identify the pest
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* === AUTO-DETECT RESULT === */}
              {!isAnalyzing &&
                autoDetectedPest &&
                !showManualGrid &&
                detectedPestInfo && (
                  <Card
                    className="border-2 border-emerald-500/50 bg-emerald-50/60 dark:bg-emerald-950/30"
                    data-ocid="scanner.auto_result.card"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-base text-emerald-800 dark:text-emerald-300">
                        <ScanSearch className="h-5 w-5 flex-shrink-0" />
                        Pest Identified!
                      </CardTitle>
                      <CardDescription className="text-emerald-700 dark:text-emerald-400">
                        Based on your photo, we identified this pest.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Identified pest card */}
                      <div className="flex items-center gap-4 rounded-xl border border-emerald-300/60 bg-white/70 dark:bg-emerald-900/20 px-4 py-3">
                        <img
                          src={detectedPestInfo.img}
                          alt={detectedPestInfo.label}
                          className="h-14 w-14 object-contain flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-bold text-foreground text-lg leading-tight">
                            {detectedPestInfo.label}
                          </p>
                          <p className="text-sm text-muted-foreground mt-0.5 leading-snug">
                            We identified this as a{" "}
                            <strong>{detectedPestInfo.label}</strong>. Tap below
                            to see identification info and prevention tips.
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                          size="lg"
                          onClick={() => {
                            window.location.href = `${window.location.pathname}?pest=${detectedPestInfo.id}#identify`;
                          }}
                          data-ocid="scanner.auto_result.primary_button"
                        >
                          <Search className="mr-2 h-4 w-4" />
                          View {detectedPestInfo.label} Info
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="flex-1 border-emerald-400/60 text-emerald-800 hover:bg-emerald-100/60 dark:text-emerald-300 dark:hover:bg-emerald-900/30"
                          onClick={() => setShowManualGrid(true)}
                          data-ocid="scanner.auto_result.secondary_button"
                        >
                          <ChevronDown className="mr-2 h-4 w-4" />
                          Not right? Choose manually
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}

              {/* === MANUAL GRID (shown when user clicks "Not right?") === */}
              {showManualGrid && (
                <Card
                  className="border-2 border-primary/60 bg-primary/5"
                  data-ocid="scanner.manual_grid.panel"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Search className="h-5 w-5 text-primary" />
                      What pest did you find? Tap to identify it.
                    </CardTitle>
                    <CardDescription>
                      Select the pest that matches what you photographed —
                      you'll go straight to identification and prevention info.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {PEST_BUTTONS.map((pest, index) => (
                        <Button
                          key={pest.id}
                          variant="outline"
                          className="h-20 flex-col gap-1 text-xs hover:bg-primary/10 hover:border-primary transition-colors"
                          onClick={() => {
                            window.location.href = `${window.location.pathname}?pest=${pest.id}#identify`;
                          }}
                          data-ocid={`scanner.pest_identify.button.${index + 1}`}
                        >
                          <img
                            src={pest.img}
                            alt={pest.label}
                            className="h-7 w-7 object-contain"
                          />
                          <span className="leading-tight text-center">
                            {pest.label}
                          </span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Photo editing tools */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="zoom-slider">Zoom: {zoom.toFixed(1)}x</Label>
                  <Slider
                    id="zoom-slider"
                    min={1}
                    max={3}
                    step={0.1}
                    value={[zoom]}
                    onValueChange={(values) => setZoom(values[0])}
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={rotate}
                    variant="outline"
                    size="lg"
                    className="flex-1 min-w-[120px]"
                  >
                    <RotateCw className="mr-2 h-5 w-5" />
                    Rotate
                  </Button>
                  <Button
                    onClick={toggleEnhance}
                    variant={enhanceEnabled ? "default" : "outline"}
                    size="lg"
                    className="flex-1 min-w-[120px]"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Enhance
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={handleSaveToGallery}
                    variant="default"
                    size="lg"
                    className="flex-1 min-w-[120px]"
                    data-ocid="scanner.save.primary_button"
                  >
                    <Save className="mr-2 h-5 w-5" />
                    Save to Gallery
                  </Button>
                  <Button
                    onClick={handleDownload}
                    variant="outline"
                    size="lg"
                    className="flex-1 min-w-[120px]"
                    data-ocid="scanner.download.secondary_button"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download
                  </Button>
                  <Button
                    onClick={handleDelete}
                    variant="outline"
                    size="lg"
                    className="flex-1 min-w-[120px]"
                    data-ocid="scanner.clear.delete_button"
                  >
                    <Trash2 className="mr-2 h-5 w-5" />
                    Clear Photo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <SavedScansGallery
        savedScans={savedScans}
        onOpenScan={handleOpenSavedScan}
        onDeleteScan={handleDeleteSavedScan}
        onMoveScan={handleMoveSavedScan}
        onAddTag={handleAddTag}
        onRemoveTag={handleRemoveTag}
        onUpdateTag={handleUpdateTag}
      />
    </div>
  );
}
