import { useState, useEffect, useCallback, useRef } from 'react';
import { rotateImage, enhanceImage, applyZoom } from '../utils/imageProcessing';

export function useImageEditor(sourceImage: string | null) {
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [cropRect, setCropRect] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
  const [enhanceEnabled, setEnhanceEnabled] = useState(false);
  const [zoom, setZoom] = useState(1);
  const processingRef = useRef(false);

  const processImage = useCallback(async () => {
    if (!sourceImage || processingRef.current) return;

    processingRef.current = true;
    try {
      let result = sourceImage;

      // Apply rotation
      if (rotation !== 0) {
        result = await rotateImage(result, rotation);
      }

      // Apply zoom
      if (zoom !== 1) {
        result = await applyZoom(result, zoom);
      }

      // Apply enhancement
      if (enhanceEnabled) {
        result = await enhanceImage(result);
      }

      setProcessedImage(result);
    } catch (error) {
      console.error('Error processing image:', error);
      setProcessedImage(sourceImage);
    } finally {
      processingRef.current = false;
    }
  }, [sourceImage, rotation, zoom, enhanceEnabled]);

  useEffect(() => {
    if (sourceImage) {
      processImage();
    } else {
      setProcessedImage(null);
    }
  }, [sourceImage, processImage]);

  const rotate = useCallback(() => {
    setRotation((prev) => (prev + 90) % 360);
  }, []);

  const toggleEnhance = useCallback(() => {
    setEnhanceEnabled((prev) => !prev);
  }, []);

  const exportImage = useCallback(async (): Promise<Blob | null> => {
    const imageToExport = processedImage || sourceImage;
    if (!imageToExport) return null;

    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          canvas.toBlob((blob) => {
            resolve(blob);
          }, 'image/png');
        } else {
          resolve(null);
        }
      };
      img.src = imageToExport;
    });
  }, [processedImage, sourceImage]);

  const reset = useCallback(() => {
    setRotation(0);
    setCropRect(null);
    setEnhanceEnabled(false);
    setZoom(1);
    setProcessedImage(null);
  }, []);

  return {
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
    reset,
  };
}
