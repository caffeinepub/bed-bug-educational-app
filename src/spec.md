# Specification

## Summary
**Goal:** Add four ant pest types (Black, Red, Army, Carpenter) to the Pest ID Guide with educational content and selection icons.

**Planned changes:**
- Create four new educational content React components under `frontend/src/components/pests/` for Black Ants, Red Ants, Army Ants, and Carpenter Ants, following the existing cards + alerts layout and covering identification, habitats/attractants, prevention, and what to do if found (including safety notes; carpenter ants include structural-damage caution).
- Update `frontend/src/components/EducationalContent.tsx` to include the four new ant types in the pest selection UI and ensure they render correctly across Identify, Habitats, Prevention, and Treatment tabs using the existing selection + `renderPestContent` pattern.
- Add four new static ant icon assets under `frontend/public/assets/generated` and wire them into the pest selection buttons via `<img>` tags with appropriate English alt text.

**User-visible outcome:** Users can select Black Ants, Red Ants, Army Ants, or Carpenter Ants in the educational UI to view tailored guidance in each tab, with matching icons in the selection grid.
