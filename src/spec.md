# Specification

## Summary
**Goal:** Deliver a single-purpose, romantic Valentine page that asks “Will you be my Valentine, Tamanna?” with a playful evasive “No” and a “Yes” success photo reveal.

**Planned changes:**
- Build a single-page view with the question text and exactly two visible buttons: “Yes” and “No”.
- Implement evasive “No” behavior that repositions the button within the visible container on hover (desktop) and on pointer/touch attempts (iPad) so it cannot trigger success.
- Implement “Yes” click state transition (no page reload) to a success view showing the message “Good choice” and one uploaded image (Tamanna.jpeg or Tamanna-1.jpeg) sized appropriately for iPad.
- Apply a cohesive romantic theme (pink/white palette, consistent typography/spacing, subtle heart/gradient accents and gentle animations) and ensure responsive, iPad-friendly tap targets and pointer handling.

**User-visible outcome:** The user sees a romantic prompt with “Yes” and an evasive “No”; tapping/clicking “Yes” reveals “Good choice” and the provided photo on the same page.
