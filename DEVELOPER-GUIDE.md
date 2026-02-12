PHIERS Developer Constitution

Version 1.0
Canonical Movement Build Standard

1. Movement Identity (Non-Negotiable)

PHIERS is:

A public-interest citizen movement.

It is NOT:

A SaaS product

A startup

A lead funnel

A nonprofit pitch site

A marketing brand

Every technical decision must preserve:

Authority

Clarity

Emotional cadence

Seriousness

Simplicity

If a UI choice makes it feel like a product landing page, it is wrong.

2. Canonical Homepage Structure (index.html)

File: /index.html
This is the canonical entry point.

Required structure order:

1. Unified Navigation
2. Canonical Hero
3. 111-Second Video Block
4. Core Positioning Section
5. Supporting Sections (existing movement content)
6. Footer (movement identity block)
7. Timestamp Badge


Nothing goes above the hero except navigation.

3. Canonical Hero Specification

Must include:

• PHIERS logo
• “by PHIERS” byline
• H1: THE MABAH MOVEMENT
• Definition line: Making America Better And Healthier
• Mission line: Our citizen-led mission to fix what Congress won’t.
• Subtext framing line

Only ONE <h1> per page.

All other major headings must be <h2>.

No additional marketing slogans may be inserted without approval.

4. Video Block (Mandatory)

YouTube ID: 2j-dF3hgdeE

Title:
“The MATH Congress Doesn’t Want You to See”

Placement:
Immediately below hero.
Above fold on desktop.
Near top on mobile.

Technical requirements:

• Responsive 16:9 container
• No fixed pixel width
• Must resize cleanly on mobile
• No autoplay

Example implementation:

<div class="video-wrapper">
  <iframe 
    src="https://www.youtube.com/embed/2j-dF3hgdeE" 
    title="The MATH Congress Doesn’t Want You to See"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>


CSS:

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

5. Navigation Standard

Unified nav across ALL pages.

Must include links to:

OVERVIEW.html
Simple-Math-Fast-Read.html
5D_Solutions.html
Action.html
Crisis.html
Quickstart.html
Donate.html
FAQ.html
Resources.html
Media.html
About.html
Why-Change-Required.html
Leverage.html
Unions-Strategy.html

Internal links must be relative paths.

Mobile:
• Hamburger or stacked links acceptable
• Must be keyboard navigable
• Must not break layout

No page may have a custom nav variant.

6. Image Rules (Global)

Desktop:
All content images max-width 50%.

Mobile:
Images stack at 100% width.

Every image must:

• Include meaningful alt text
• Be wrapped in <a> linking to full-size version
• Open in new tab
• No JS lightboxes

Example:

<a href="images/graph-full.png" target="_blank">
  <img src="images/graph.png" alt="ACA telehealth cost comparison graph">
</a>

7. Footer (Mandatory Block)

Must include:

PHIERS Movement | MABAH
Will Price | Chief Solutions Architect
Phone
Email
Clarifier line:

“PHIERS is a public-interest movement — not a company, not a product. The only thing missing is you.”

This text may not be edited without approval.

8. Timestamp Badge

Visible location near footer or top-right.

Format:

Updated [Month Day, Year] — Healthcare crisis window active

Must be easy to manually update in raw HTML.

No dynamic scripts required.

9. Typography & Visual Consistency

• Use consistent font stack across pages
• Maintain unified color palette
• Maintain consistent max-width container
• No per-page visual experiments

This is a movement. Not a Dribbble showcase.

10. Accessibility Requirements

Every page must:

• Use logical heading hierarchy
• Have alt text for all images
• Maintain readable font sizes on mobile
• Maintain contrast compliance
• Be keyboard navigable
• Avoid horizontal scrolling on narrow viewports

Video and images must scale responsively.

11. Dev Workflow Rules

No silent deletions.

No rewriting movement copy without explicit sign-off.

No global search/replace across repo without review.

Changes must be isolated and small.

Example good commit:

“Standardize content images to 50% desktop width on index.html”

Example bad commit:

“Refactor layout and adjust messaging”

Manual verification required after each change.

GitHub Pages output must match intended layout.

12. What Developers Are NOT Allowed To Do

• “Optimize” messaging tone
• Convert movement language into marketing copy
• Insert conversion popups
• Add growth hacks
• Add fancy JS effects for aesthetic reasons
• Introduce new color palettes
• Reframe PHIERS as a product

If it makes it feel like a startup, it is wrong.

13. Definition of Done (Homepage)

Homepage is considered complete when:

✔ Canonical hero present
✔ Video correctly embedded
✔ Unified nav working
✔ Images standardized
✔ Footer intact
✔ Timestamp visible
✔ Accessibility validated
✔ No horizontal mobile scroll
✔ All internal links working

14. Escalation Protocol

If unsure:

Preserve movement copy.
Preserve hierarchy.
Choose clarity over cleverness.

When in doubt:
Do less, not more.

Why This Document Exists

To ensure PHIERS can be built, maintained, and expanded by any developer team without:

• Message drift
• Brand dilution
• Structural inconsistency
• Rogue experimentation

This is a movement architecture document, not a design suggestion.
