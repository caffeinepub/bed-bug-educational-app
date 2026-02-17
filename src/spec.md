# Specification

## Summary
**Goal:** Let users delete individual items from the Saved Scans gallery with a clear, accessible control and a confirmation step.

**Planned changes:**
- Add a delete control (trash icon or labeled button) on each Saved Scans card in the Saved Scans gallery.
- Show a confirmation dialog in English indicating the delete is permanent, with Confirm and Cancel actions.
- On confirm, remove the saved scan from the local saved scans list so it no longer appears; on cancel, make no changes.
- Ensure delete controls have accessible labels (e.g., aria-label) and work well on mobile and desktop.

**User-visible outcome:** Users can delete any saved scan from the Saved Scans gallery after confirming, and canceled deletions leave scans unchanged.
