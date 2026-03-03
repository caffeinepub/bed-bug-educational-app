# Bed Bug Educational App

## Current State
The PhotoScanner component captures or uploads a photo. After a photo is taken, it shows a static grid of 18 pest buttons that require the user to manually tap the matching pest to navigate to the identify tab.

## Requested Changes (Diff)

### Add
- Auto-identification flow: immediately after a photo is captured or uploaded, the scanner runs a simulated color/pattern analysis on the image using canvas pixel data, scores each pest, picks the top match, and automatically navigates to that pest's identify page.
- A "Scanning…" loading overlay shown briefly while analysis runs, giving the feel of real analysis.
- An "Auto-identified" result banner showing the detected pest name and icon with a "Go to Pest Info" primary button and a "Not right? Choose manually" secondary button that reveals the full pest grid.
- The pest grid remains accessible via the "Not right?" fallback so users can override.

### Modify
- PhotoScanner: add `onPestIdentified` callback prop (or internal state) that triggers auto-navigation after capture/upload.
- After capture/upload, instead of immediately rendering the pest grid, show the scanning state → result banner flow.
- Keep all existing editing tools (rotate, enhance, zoom, save, download, clear) intact below the result banner.

### Remove
- Automatic display of the pest grid before the user interacts — the grid only appears if user taps "Not right? Choose manually".

## Implementation Plan
1. Add `analyzePestFromImage(imageDataUrl: string): Promise<string>` utility in PhotoScanner that samples canvas pixel data (hue/saturation/brightness) and returns a pest ID based on color scoring.
2. Add state: `isAnalyzing`, `autoDetectedPest`, `showManualGrid` to PhotoScanner.
3. After `setSelectedImage`, trigger `analyzePestFromImage` and set `isAnalyzing = true`.
4. On analysis complete, set `autoDetectedPest` and navigate: call `window.location.href = ...?pest=ID#identify` after a brief confirmation banner (2-second auto-navigate or user click).
5. Render scanning overlay when `isAnalyzing`.
6. Render result banner when `autoDetectedPest` is set.
7. "Not right?" button sets `showManualGrid = true` to display the full pest selection grid.
