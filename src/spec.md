# Specification

## Summary
**Goal:** Improve the Photo Scanner by adding an in-session delete control and a locally persisted saved-photo gallery/backup with safe deletion.

**Planned changes:**
- Add a visible, accessible delete/trash control in the Photo Scanner to clear the currently loaded photo and reset the editor/session state back to capture/upload options.
- Add a “save to gallery” action that stores the current scan locally in the browser so saved scans persist across refreshes.
- Add a responsive saved-photo gallery view showing saved scans as thumbnails with a date/time label, plus actions to open/view and delete saved scans.
- Add an accessible confirmation step for deleting items from the saved-photo gallery, with clear confirm/cancel behavior and an English empty state when no saved scans exist.

**User-visible outcome:** Users can remove an unwanted photo during scanning, save scans to a local gallery that survives refreshes, re-open saved scans later, and delete saved scans with a confirmation prompt.
