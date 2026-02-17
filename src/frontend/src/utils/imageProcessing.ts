export async function rotateImage(imageDataUrl: string, degrees: number): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(imageDataUrl);
        return;
      }

      const rad = (degrees * Math.PI) / 180;
      const sin = Math.abs(Math.sin(rad));
      const cos = Math.abs(Math.cos(rad));

      canvas.width = img.width * cos + img.height * sin;
      canvas.height = img.width * sin + img.height * cos;

      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rad);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);

      resolve(canvas.toDataURL('image/png'));
    };
    img.src = imageDataUrl;
  });
}

export async function enhanceImage(imageDataUrl: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(imageDataUrl);
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Apply contrast and brightness enhancement
      const contrast = 1.2;
      const brightness = 10;

      for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.min(255, Math.max(0, contrast * (data[i] - 128) + 128 + brightness));
        data[i + 1] = Math.min(255, Math.max(0, contrast * (data[i + 1] - 128) + 128 + brightness));
        data[i + 2] = Math.min(255, Math.max(0, contrast * (data[i + 2] - 128) + 128 + brightness));
      }

      ctx.putImageData(imageData, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.src = imageDataUrl;
  });
}

export async function applyZoom(imageDataUrl: string, zoomLevel: number): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(imageDataUrl);
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;

      const scaledWidth = img.width * zoomLevel;
      const scaledHeight = img.height * zoomLevel;
      const offsetX = (canvas.width - scaledWidth) / 2;
      const offsetY = (canvas.height - scaledHeight) / 2;

      ctx.fillStyle = 'oklch(0.18 0.02 40)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, scaledWidth, scaledHeight);

      resolve(canvas.toDataURL('image/png'));
    };
    img.src = imageDataUrl;
  });
}

export async function cropImage(
  imageDataUrl: string,
  cropRect: { x: number; y: number; width: number; height: number }
): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(imageDataUrl);
        return;
      }

      canvas.width = cropRect.width;
      canvas.height = cropRect.height;

      ctx.drawImage(
        img,
        cropRect.x,
        cropRect.y,
        cropRect.width,
        cropRect.height,
        0,
        0,
        cropRect.width,
        cropRect.height
      );

      resolve(canvas.toDataURL('image/png'));
    };
    img.src = imageDataUrl;
  });
}
