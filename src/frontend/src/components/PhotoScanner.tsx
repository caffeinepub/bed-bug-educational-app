import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
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
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Download,
  Lightbulb,
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
  {
    id: "batbugs",
    label: "Bat Bugs",
    img: "/assets/generated/bat-bug-icon-transparent.dim_128x128.png",
  },
] as const;

type PestId = (typeof PEST_BUTTONS)[number]["id"];

interface PestCandidate {
  id: PestId;
  confidence: number;
}

function analyzeQuadrant(
  data: Uint8ClampedArray,
  startIdx: number,
  quadrantSize: number,
  fullWidth: number,
) {
  let totalR = 0;
  let totalG = 0;
  let totalB = 0;
  let count = 0;
  let darkCount = 0;
  let brownCount = 0;
  let grayCount = 0;
  let warmCount = 0;
  let edgeCount = 0;
  const pixels: number[] = [];

  for (let row = 0; row < quadrantSize; row++) {
    for (let col = 0; col < quadrantSize; col++) {
      const pixelIdx = (startIdx + row * fullWidth + col) * 4;
      const r = data[pixelIdx];
      const g = data[pixelIdx + 1];
      const b = data[pixelIdx + 2];
      const brightness = (r + g + b) / 3;
      totalR += r;
      totalG += g;
      totalB += b;
      pixels.push(brightness);
      count++;
      if (brightness < 100) darkCount++;
      if (r > g + 20 && b < r - 30) brownCount++;
      if (Math.abs(r - g) < 25 && Math.abs(g - b) < 25 && Math.abs(r - b) < 25)
        grayCount++;
      if (r > 140 && g > 80 && b < 100) warmCount++;
    }
  }

  for (let row = 1; row < quadrantSize - 1; row++) {
    for (let col = 1; col < quadrantSize - 1; col++) {
      const idx = row * quadrantSize + col;
      const diff =
        Math.abs(pixels[idx] - pixels[idx - 1]) +
        Math.abs(pixels[idx] - pixels[idx + 1]) +
        Math.abs(pixels[idx] - pixels[idx - quadrantSize]) +
        Math.abs(pixels[idx] - pixels[idx + quadrantSize]);
      if (diff > 80) edgeCount++;
    }
  }

  const mean = pixels.reduce((a, b) => a + b, 0) / pixels.length;
  const variance =
    pixels.reduce((acc, v) => acc + (v - mean) ** 2, 0) / pixels.length;

  return {
    avgR: totalR / count,
    avgG: totalG / count,
    avgB: totalB / count,
    darkRatio: darkCount / count,
    brownRatio: brownCount / count,
    grayRatio: grayCount / count,
    warmRatio: warmCount / count,
    edgeDensity: edgeCount / count,
    variance,
    brightness: (totalR + totalG + totalB) / (count * 3),
  };
}

async function analyzePestFromImage(
  imageDataUrl: string,
): Promise<PestCandidate[]> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const SIZE = 64;
      const HALF = SIZE / 2;
      const canvas = document.createElement("canvas");
      canvas.width = SIZE;
      canvas.height = SIZE;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, SIZE, SIZE);
      const imageData = ctx.getImageData(0, 0, SIZE, SIZE);
      const data = imageData.data;

      const q1 = analyzeQuadrant(data, 0, HALF, SIZE);
      const q2 = analyzeQuadrant(data, HALF, HALF, SIZE);
      const q3 = analyzeQuadrant(data, HALF * SIZE, HALF, SIZE);
      const q4 = analyzeQuadrant(data, HALF * SIZE + HALF, HALF, SIZE);

      const avgR = (q1.avgR + q2.avgR + q3.avgR + q4.avgR) / 4;
      const avgG = (q1.avgG + q2.avgG + q3.avgG + q4.avgG) / 4;
      const avgB = (q1.avgB + q2.avgB + q3.avgB + q4.avgB) / 4;
      const brightness = (avgR + avgG + avgB) / 3;
      const darkRatio =
        (q1.darkRatio + q2.darkRatio + q3.darkRatio + q4.darkRatio) / 4;
      const brownRatio =
        (q1.brownRatio + q2.brownRatio + q3.brownRatio + q4.brownRatio) / 4;
      const grayRatio =
        (q1.grayRatio + q2.grayRatio + q3.grayRatio + q4.grayRatio) / 4;
      const warmRatio =
        (q1.warmRatio + q2.warmRatio + q3.warmRatio + q4.warmRatio) / 4;
      const edgeDensity =
        (q1.edgeDensity + q2.edgeDensity + q3.edgeDensity + q4.edgeDensity) / 4;
      const variance =
        (q1.variance + q2.variance + q3.variance + q4.variance) / 4;

      const smallBody = brightness > 180;
      const veryDark = darkRatio > 0.55;
      const moderateDark = darkRatio > 0.3;
      const highBrown = brownRatio > 0.25;
      const moderateBrown = brownRatio > 0.1;
      const highGray = grayRatio > 0.4;
      const highEdge = edgeDensity > 0.08;
      const highVariance = variance > 1200;
      const warmDominant = warmRatio > 0.2;
      const reddish = avgR > avgG + 15 && avgR > avgB + 20;
      const almostBlack = darkRatio > 0.65;

      const quadBrightMax = Math.max(
        q1.brightness,
        q2.brightness,
        q3.brightness,
        q4.brightness,
      );
      const quadBrightMin = Math.min(
        q1.brightness,
        q2.brightness,
        q3.brightness,
        q4.brightness,
      );
      const elongated = quadBrightMax - quadBrightMin > 60;

      const rawScores: Record<PestId, number> = {
        bedbugs:
          (highBrown ? 30 : moderateBrown ? 15 : 0) +
          (moderateDark ? 25 : 0) +
          (highEdge ? 10 : 0) +
          (smallBody ? 15 : 0) +
          (highVariance ? 5 : 0),
        cockroaches:
          (veryDark ? 30 : moderateDark ? 15 : 0) +
          (highBrown && moderateDark ? 20 : highBrown ? 10 : 0) +
          (highVariance ? 15 : 0) +
          (highEdge ? 10 : 0),
        ticks:
          (moderateDark ? 20 : 0) +
          (highBrown ? 25 : moderateBrown ? 10 : 0) +
          (smallBody ? 20 : 0) +
          (highEdge ? 10 : 0),
        spiders:
          (highGray ? 20 : 0) +
          (highEdge ? 30 : 0) +
          (elongated ? 20 : 0) +
          (moderateDark ? 10 : 0),
        mice:
          (highGray ? 25 : 0) +
          (!veryDark && brightness > 100 ? 20 : 0) +
          (!highEdge ? 15 : 0) +
          (warmRatio > 0.1 && warmRatio < 0.3 ? 10 : 0),
        scorpions:
          (warmDominant ? 30 : 0) +
          (highBrown ? 15 : 0) +
          (highVariance ? 15 : 0) +
          (elongated ? 15 : 0),
        headlice:
          (smallBody ? 25 : 0) +
          (brightness > 140 && brownRatio > 0.05 ? 20 : 0) +
          (highEdge ? 10 : 0) +
          (!veryDark ? 10 : 0),
        redants:
          (reddish ? 35 : 0) +
          (warmDominant ? 20 : 0) +
          (highEdge ? 10 : 0) +
          (smallBody ? 10 : 0),
        blackants:
          (almostBlack ? 35 : veryDark ? 20 : 0) +
          (!highBrown ? 15 : 0) +
          (highEdge ? 15 : 0) +
          (smallBody ? 10 : 0),
        carpenterants:
          (veryDark ? 25 : moderateDark ? 15 : 0) +
          (!smallBody ? 15 : 0) +
          (highEdge ? 10 : 0) +
          (highGray ? 10 : 0),
        armyants:
          (moderateDark ? 20 : 0) +
          (highBrown ? 20 : 0) +
          (highVariance ? 15 : 0) +
          (highEdge ? 10 : 0),
        earwigs:
          (reddish && moderateDark ? 30 : 0) +
          (elongated ? 25 : 0) +
          (highVariance ? 15 : 0) +
          (moderateBrown ? 10 : 0),
        housefly:
          (highGray ? 25 : 0) +
          (moderateDark ? 15 : 0) +
          (!smallBody ? 10 : 0) +
          (highEdge ? 10 : 0),
        largeflies:
          (highGray ? 20 : 0) +
          (brightness > 80 && brightness < 160 ? 20 : 0) +
          (!smallBody ? 15 : 0) +
          (highEdge ? 10 : 0),
        mothslarvae:
          (brightness > 160 && !veryDark ? 30 : 0) +
          (grayRatio < 0.2 && brownRatio < 0.15 ? 20 : 0) +
          (!highEdge ? 15 : 0) +
          (!reddish ? 10 : 0),
        beetles:
          (veryDark ? 25 : moderateDark ? 10 : 0) +
          (highEdge ? 20 : 0) +
          (!highBrown ? 15 : 0) +
          (highVariance ? 15 : 0),
        woodbeetles:
          (highBrown ? 30 : moderateBrown ? 15 : 0) +
          (elongated ? 15 : 0) +
          (!veryDark ? 10 : 0) +
          (highVariance ? 10 : 0),
        blackstinkbugs:
          (veryDark ? 25 : 0) +
          (highGray ? 15 : 0) +
          (!elongated ? 15 : 0) +
          (highVariance ? 10 : 0),
        batbugs:
          (highBrown ? 25 : moderateBrown ? 15 : 0) +
          (moderateDark ? 20 : 0) +
          (smallBody ? 20 : 0) +
          (highVariance ? 5 : 0),
      };

      const maxRaw = Math.max(...Object.values(rawScores));
      const minRaw = Math.min(...Object.values(rawScores));
      const range = maxRaw - minRaw || 1;

      const candidates: PestCandidate[] = (
        Object.entries(rawScores) as [PestId, number][]
      )
        .map(([id, score]) => ({
          id,
          confidence: Math.round(20 + ((score - minRaw) / range) * 75),
        }))
        .sort((a, b) => b.confidence - a.confidence)
        .slice(0, 3);

      resolve(candidates);
    };
    img.src = imageDataUrl;
  });
}

const PHOTO_TIPS = [
  "Ensure the pest is clearly visible and in focus",
  "Use good lighting — natural light or a flashlight works well",
  "Get as close as possible to fill the frame with the pest",
  "Avoid blurry or dark photos for best identification",
  "If unsure, tap 'Choose manually' to browse all pests",
];

function getConfidenceColor(confidence: number): string {
  if (confidence >= 70) return "bg-green-500";
  if (confidence >= 40) return "bg-yellow-500";
  return "bg-orange-500";
}

function getConfidenceLabel(confidence: number): string {
  if (confidence >= 70) return "High confidence";
  if (confidence >= 40) return "Moderate confidence";
  return "Low confidence";
}

export function PhotoScanner() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [pestCandidates, setPestCandidates] = useState<PestCandidate[]>([]);
  const [showManualGrid, setShowManualGrid] = useState(false);
  const [showTips, setShowTips] = useState(false);
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

  useOnUnmount(() => {
    if (isActive) stopCamera();
  });

  const triggerAnalysis = useCallback((imageDataUrl: string) => {
    setIsAnalyzing(true);
    setPestCandidates([]);
    setShowManualGrid(false);
    const analysisStart = Date.now();
    analyzePestFromImage(imageDataUrl).then((candidates) => {
      const elapsed = Date.now() - analysisStart;
      const remaining = Math.max(0, 2000 - elapsed);
      setTimeout(() => {
        setIsAnalyzing(false);
        setPestCandidates(candidates);
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
    await startCamera();
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
    if (isActive) await stopCamera();
    setSelectedImage(null);
    setShowCamera(false);
    setPestCandidates([]);
    setIsAnalyzing(false);
    setShowManualGrid(false);
    resetEditor();
    if (fileInputRef.current) fileInputRef.current.value = "";
    toast.success("Photo cleared");
  }, [isActive, stopCamera, resetEditor]);

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
            Capture or upload a photo of a pest — our multi-feature analyzer
            identifies it and shows you the top matches with confidence scores.
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

              {/* Photo tips collapsible */}
              <div className="rounded-lg border border-border bg-muted/40">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/60 transition-colors rounded-lg"
                  onClick={() => setShowTips((v) => !v)}
                  data-ocid="scanner.tips.toggle"
                >
                  <span className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    Tips for better identification
                  </span>
                  {showTips ? (
                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
                {showTips && (
                  <ul className="px-4 pb-4 space-y-2">
                    {PHOTO_TIPS.map((tip) => (
                      <li
                        key={tip}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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

              {/* SCANNING STATE */}
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
                          Scanning photo…
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Analyzing color patterns, edges, and texture to
                          identify the pest
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* TOP 3 CANDIDATES */}
              {!isAnalyzing && pestCandidates.length > 0 && !showManualGrid && (
                <Card
                  className="border-2 border-primary/40"
                  data-ocid="scanner.results.card"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <ScanSearch className="h-5 w-5 text-primary" />
                      Pest Identification Results
                    </CardTitle>
                    <CardDescription>
                      Top matches based on photo analysis. Tap "View Info" to
                      learn more about each pest.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {pestCandidates.map((candidate, index) => {
                      const pestInfo = PEST_BUTTONS.find(
                        (p) => p.id === candidate.id,
                      );
                      if (!pestInfo) return null;
                      const isTop = index === 0;
                      return (
                        <div
                          key={candidate.id}
                          className={`rounded-xl border p-3 transition-colors ${
                            isTop
                              ? "border-primary/60 bg-primary/5"
                              : "border-border bg-card"
                          }`}
                          data-ocid={`scanner.result.item.${index + 1}`}
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={pestInfo.img}
                              alt={pestInfo.label}
                              className={`object-contain flex-shrink-0 ${
                                isTop ? "h-14 w-14" : "h-10 w-10"
                              }`}
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                <span
                                  className={`font-semibold ${
                                    isTop ? "text-base" : "text-sm"
                                  } text-foreground`}
                                >
                                  {pestInfo.label}
                                </span>
                                {isTop && (
                                  <Badge className="bg-primary text-primary-foreground text-xs">
                                    Most Likely
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                                  <div
                                    className={`h-full rounded-full transition-all ${getConfidenceColor(candidate.confidence)}`}
                                    style={{
                                      width: `${candidate.confidence}%`,
                                    }}
                                  />
                                </div>
                                <span className="text-xs font-medium text-muted-foreground w-10 text-right flex-shrink-0">
                                  {candidate.confidence}%
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {getConfidenceLabel(candidate.confidence)}
                              </p>
                            </div>
                            <Button
                              size="sm"
                              variant={isTop ? "default" : "outline"}
                              className="flex-shrink-0"
                              onClick={() => {
                                window.location.href = `${window.location.pathname}?pest=${pestInfo.id}#identify`;
                              }}
                              data-ocid={`scanner.result.primary_button.${index + 1}`}
                            >
                              <Search className="mr-1.5 h-3.5 w-3.5" />
                              View Info
                            </Button>
                          </div>
                        </div>
                      );
                    })}

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-muted-foreground hover:text-foreground mt-1"
                      onClick={() => setShowManualGrid(true)}
                      data-ocid="scanner.results.secondary_button"
                    >
                      <ChevronDown className="mr-2 h-4 w-4" />
                      None of these — pick manually
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* MANUAL GRID */}
              {showManualGrid && (
                <Card
                  className="border-2 border-primary/60 bg-primary/5"
                  data-ocid="scanner.manual_grid.panel"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <Search className="h-5 w-5 text-primary" />
                        Choose pest manually
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowManualGrid(false)}
                        data-ocid="scanner.manual_grid.close_button"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardDescription>
                      Select the pest that matches what you photographed.
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
