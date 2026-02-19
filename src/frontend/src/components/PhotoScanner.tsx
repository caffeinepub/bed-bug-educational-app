import { useState, useRef, useCallback, useEffect } from 'react';
import { Camera, Upload, RotateCw, Sparkles, Download, X, SwitchCamera, Trash2, Save, Info, Tag, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useCamera } from '../camera/useCamera';
import { useImageEditor } from '../hooks/useImageEditor';
import { useSavedScans } from '../hooks/useSavedScans';
import { SavedScansGallery } from './SavedScansGallery';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useOnUnmount } from '@/utils/useOnUnmount';

export function PhotoScanner() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [showSpiderHelp, setShowSpiderHelp] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    isActive,
    isSupported,
    error: cameraError,
    isLoading: cameraLoading,
    currentFacingMode,
    startCamera,
    stopCamera,
    capturePhoto,
    switchCamera,
    retry,
    videoRef,
    canvasRef,
  } = useCamera({
    facingMode: 'environment',
    width: 1920,
    height: 1080,
    quality: 0.9,
    format: 'image/jpeg',
  });

  const {
    processedImage,
    rotation,
    cropRect,
    enhanceEnabled,
    zoom,
    rotate,
    toggleEnhance,
    setCropRect,
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

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSelectedImage(result);
        setShowCamera(false);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleOpenCamera = useCallback(async () => {
    setShowCamera(true);
    const success = await startCamera();
    if (!success) {
      // Camera failed to start, keep upload option available
      console.error('Camera failed to start');
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
      };
      reader.readAsDataURL(photo);
      await stopCamera();
    }
  }, [capturePhoto, stopCamera]);

  const handleDelete = useCallback(async () => {
    // Stop camera if active
    if (isActive) {
      await stopCamera();
    }
    
    // Clear state
    setSelectedImage(null);
    setShowCamera(false);
    setShowSpiderHelp(false);
    resetEditor();
    
    // Clear file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    
    toast.success('Photo cleared');
  }, [isActive, stopCamera, resetEditor]);

  const handleReset = useCallback(() => {
    setSelectedImage(null);
    setShowSpiderHelp(false);
    resetEditor();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [resetEditor]);

  const handleDownload = useCallback(async () => {
    const blob = await exportImage();
    if (blob) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `pest-scan-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success('Photo downloaded');
    }
  }, [exportImage]);

  const handleSaveToGallery = useCallback(async () => {
    const imageToSave = processedImage || selectedImage;
    if (imageToSave) {
      saveScan(imageToSave);
      toast.success('Scan saved to gallery');
    }
  }, [processedImage, selectedImage, saveScan]);

  const handleSaveWithSpiderTag = useCallback(async () => {
    const imageToSave = processedImage || selectedImage;
    if (imageToSave) {
      const scanId = saveScan(imageToSave);
      addTag(scanId, 'spider');
      toast.success('Scan saved with spider tag');
    }
  }, [processedImage, selectedImage, saveScan, addTag]);

  const handleOpenSavedScan = useCallback((scan: { imageDataUrl: string }) => {
    setSelectedImage(scan.imageDataUrl);
    setShowCamera(false);
    setShowSpiderHelp(false);
    toast.success('Scan opened');
  }, []);

  const handleDeleteSavedScan = useCallback((id: string) => {
    deleteScan(id);
    toast.success('Scan deleted from gallery');
  }, [deleteScan]);

  const handleMoveSavedScan = useCallback((id: string, direction: 'up' | 'down') => {
    moveScan(id, direction);
    toast.success(`Scan moved ${direction}`);
  }, [moveScan]);

  const handleAddTag = useCallback((scanId: string, tag: string) => {
    addTag(scanId, tag);
    toast.success('Tag added');
  }, [addTag]);

  const handleRemoveTag = useCallback((scanId: string, tag: string) => {
    removeTag(scanId, tag);
    toast.success('Tag removed');
  }, [removeTag]);

  const handleUpdateTag = useCallback((scanId: string, oldTag: string, newTag: string) => {
    updateTag(scanId, oldTag, newTag);
    toast.success('Tag updated');
  }, [updateTag]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="space-y-6">
      {!isPersistenceAvailable && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Storage Unavailable</AlertTitle>
          <AlertDescription>
            Saving scans may not persist on this device or browser. Your scans will be available during this session only.
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
            Capture or upload a photo of a pest for closer inspection and documentation
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
                    Camera is not supported on this device. Please use the upload option.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}

          {showCamera && (
            <div className="space-y-4">
              <div className="relative w-full overflow-hidden rounded-lg bg-muted" style={{ aspectRatio: '16/9', minHeight: '300px' }}>
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
                    {cameraError.type === 'permission' && ' Please allow camera access in your browser settings and try again.'}
                    {cameraError.type === 'not-found' && ' No camera was detected on this device.'}
                    {cameraError.type === 'not-supported' && ' Camera is not supported in this browser.'}
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleCapture}
                  disabled={!isActive || cameraLoading}
                  size="lg"
                  className="flex-1 min-w-[140px]"
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
                <Button
                  onClick={handleCloseCamera}
                  variant="outline"
                  size="lg"
                >
                  <X className="mr-2 h-5 w-5" />
                  Cancel
                </Button>
                {cameraError && (
                  <Button
                    onClick={retry}
                    variant="secondary"
                    size="lg"
                  >
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

              <Collapsible open={showSpiderHelp} onOpenChange={setShowSpiderHelp}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Info className="mr-2 h-4 w-4" />
                    {showSpiderHelp ? 'Hide' : 'Show'} Spider Photo Help
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <Card className="border-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">Spider Photo Help</CardTitle>
                      <CardDescription>
                        Tips for capturing useful spider photos and identifying key features
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="mb-2 font-semibold text-sm">Photo Capture Tips</h4>
                        <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                          <li>Use good lighting - natural light works best</li>
                          <li>Get as close as safely possible while keeping the spider in focus</li>
                          <li>Take multiple photos from different angles (top, side, front)</li>
                          <li>Include an object for scale (coin, ruler, or common item)</li>
                          <li>Capture the spider's web if present - web structure helps with identification</li>
                          <li>Keep the camera steady or use a tripod for clear images</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-2 font-semibold text-sm">Features to Note</h4>
                        <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                          <li>Body size and overall shape (compact, elongated, round)</li>
                          <li>Leg length relative to body size</li>
                          <li>Color and any distinctive markings or patterns</li>
                          <li>Eye arrangement (if visible with magnification)</li>
                          <li>Presence and type of web (orb, funnel, sheet, cobweb, or none)</li>
                          <li>Location where found (indoors/outdoors, specific room or area)</li>
                        </ul>
                      </div>

                      <Alert>
                        <Info className="h-4 w-4" />
                        <AlertTitle>Note</AlertTitle>
                        <AlertDescription className="text-sm">
                          This app does not automatically identify spider species from photos. Use your photos to compare with field guides, consult with local experts, or share with pest control professionals for accurate identification.
                        </AlertDescription>
                      </Alert>

                      <div>
                        <h4 className="mb-2 font-semibold text-sm">Safety & Next Steps</h4>
                        <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                          <li>Never handle unknown spiders - photograph from a safe distance</li>
                          <li>If you suspect a venomous species, contact a professional immediately</li>
                          <li>Save your photos to compare with online resources or field guides</li>
                          <li>Document the location and date for tracking purposes</li>
                          <li>Consider professional pest control for persistent problems</li>
                        </ul>
                      </div>

                      {selectedImage && (
                        <Button
                          onClick={handleSaveWithSpiderTag}
                          variant="default"
                          size="lg"
                          className="w-full"
                        >
                          <Tag className="mr-2 h-5 w-5" />
                          Save with Spider Tag
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>

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
                    variant={enhanceEnabled ? 'default' : 'outline'}
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
                  >
                    <Save className="mr-2 h-5 w-5" />
                    Save to Gallery
                  </Button>
                  <Button
                    onClick={handleDownload}
                    variant="outline"
                    size="lg"
                    className="flex-1 min-w-[120px]"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download
                  </Button>
                  <Button
                    onClick={handleDelete}
                    variant="outline"
                    size="lg"
                    className="flex-1 min-w-[120px]"
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
