# Specification

## Summary
**Goal:** Add spiders as a supported pest with educational content, a selector icon, and photo-scanner guidance for taking and reviewing spider photos safely.

**Planned changes:**
- Create a new SpidersContent component with English sections for Identification, Prevention, and What to Do If You Find One, including a prominent safety warning (don’t handle unknown spiders with bare hands; seek medical help for severe reactions/concerning bites; contact a professional when appropriate).
- Add “Spiders” to the pest selection UI across the EducationalContent tabs (Identify/Habitats/Prevention/Treatment) and wire selection to render SpidersContent without breaking existing pest selections.
- Add a static spider icon image to `frontend/public/assets/generated` and display it in the Spiders selection control with appropriate alt text.
- Extend the Photo Scanner UI with a clearly labeled “Spider Photo Help” section (tips for taking a good photo, a visible-feature checklist, and safety/next steps) without claiming automated identification.
- Add an optional one-click action in the Photo Scanner flow to tag saved scans with “spider” (or “spiders”) using the existing local, saved-scan tags system.

**User-visible outcome:** Users can select “Spiders” to read spider-specific guidance, see a spider icon in the selector, get in-scanner instructions for taking/assessing spider photos (without automated ID), and optionally tag saved scans as spider-related for gallery filtering.
