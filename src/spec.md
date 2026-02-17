# Specification

## Summary
**Goal:** Add a custom Bed Bugs “Quick Tip” icon and use it in Bed Bugs tip callouts across the existing sections.

**Planned changes:**
- Add a new static “Quick Tip” icon image asset under `frontend/public/assets/generated` with a transparent background and legible design at small sizes.
- Replace the current Lucide alert icon in the Bed Bugs tip/callout alerts with the new icon (rendered via `<img>` with English alt text) in:
  - `frontend/src/components/sections/IdentifySection.tsx`
  - `frontend/src/components/sections/HabitatsSection.tsx`
  - `frontend/src/components/sections/PreventionSection.tsx`
- Keep the existing user-facing alert text unchanged and ensure the icon sizing/alignment matches the previous `h-4 w-4`-style footprint across mobile and desktop.

**User-visible outcome:** Bed Bugs sections display a consistent custom “Quick Tip” icon in the tip callouts instead of the prior Lucide icons, with the same text content.
