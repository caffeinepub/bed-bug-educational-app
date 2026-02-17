# Specification

## Summary
**Goal:** Add simple user-defined tagging and tag-based filtering to Saved Scans, with tags persisted in localStorage and compatible with existing saved scans.

**Planned changes:**
- Extend the saved-scan data model stored in localStorage to include a per-scan tags list, treating older scans without tags as having an empty list.
- Add per-scan UI controls in the Saved Scans gallery to add, edit, and remove tags using clear English labels and keyboard-only support.
- Add tag-based filtering/search in the Saved Scans gallery to narrow scans by selected/entered tag text, with a clear way to reset the filter and no broken controls in the empty state.

**User-visible outcome:** Users can add/edit/remove tags on saved scans and filter the Saved Scans gallery by tag, with tags remaining after reloads and older saved scans continuing to work.
