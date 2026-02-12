# PHIERS Developer Constitution  
Version 1.0  
Movement Architecture Governance Document  

---

## Authority Statement

This document defines the structural, visual, accessibility, encoding, and messaging standards for the PHIERS movement site.

No structural, visual, navigational, messaging, or encoding changes may be made that conflict with these standards without explicit written approval from the Movement Lead.

This document is binding for all contributors.

---

# 1. Movement Identity (Non-Negotiable)

PHIERS is a public-interest citizen movement.

It is NOT:
- A SaaS product  
- A startup  
- A marketing funnel  
- A nonprofit pitch deck  
- A brand optimization project  

All implementation decisions must preserve:

• Authority  
• Clarity  
• Emotional cadence  
• Structural consistency  
• Simplicity  

If a change makes the site feel like a product landing page, it is incorrect.

---

# 2. Canonical Homepage Structure (index.html)

File: `/index.html` at repo root  
This is the canonical entry point.

Required structural order:

1. Unified Navigation  
2. Canonical Hero  
3. 111-Second Video Block  
4. Core Positioning Section  
5. Supporting Movement Sections (existing copy preserved)  
6. Footer (movement identity block)  
7. Timestamp badge  

Nothing may appear above the Hero except Navigation.

---

# 3. Canonical Hero Specification

The Hero must include:

• PHIERS logo  
• `<h1>`: THE MABAH MOVEMENT  
• Definition line: Making America Better And Healthier  
• Mission line: Our citizen-led mission to fix what Congress won’t.  
• Short framing subtext  

Rules:

• Only ONE `<h1>` per page  
• All other major headings must use `<h2>`  
• No alternate slogans may replace this hero  

The Hero defines movement authority and must remain consistent.

---

# 4. Mandatory Video Block

Video:
“The MATH Congress Doesn’t Want You to See”  
YouTube ID: `2j-dF3hgdeE`

Placement:
Immediately below the Hero.
Above fold on desktop.
Near top on mobile.

Technical requirements:

• Responsive 16:9 container  
• No fixed widths  
• No autoplay  
• Must scale without breaking layout  

---

# 5. Unified Navigation (All Pages)

Navigation must be consistent across all pages.

Minimum required links:

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

Rules:

• Use relative paths  
• Must be keyboard accessible  
• Must function on mobile  
• No per-page custom nav variations  

---

# 6. Global Image Standards

Desktop:
All inline content images max-width 50%.

Mobile:
Images stack to 100% width.

Each image must:

• Include meaningful alt text  
• Be wrapped in `<a>` linking to the full-size asset  
• Open in a new tab  
• Use no JavaScript lightbox  

---

# 7. Footer (Mandatory Block)

Footer must include:

PHIERS Movement | MABAH  
Will Price | Chief Solutions Architect  
Phone  
Email  

Clarifier text:

“PHIERS is a public-interest movement — not a company, not a product. The only thing missing is you.”

This block may not be altered without written approval.

---

# 8. Timestamp Badge

Visible near footer or top-right.

Format:

Updated [Month Day, Year] — Healthcare crisis window active

Must be easy to manually update in raw HTML.

No dynamic scripts required.

---

# 9. Typography & Visual Consistency

• Maintain consistent font stack  
• Maintain consistent color palette  
• Maintain consistent max-width container  
• Maintain consistent spacing system  
• No experimental per-page redesigns  

Reliability over visual novelty.

---

# 10. Accessibility Requirements

Every page must:

• Use logical heading hierarchy  
• Include alt text for all images  
• Maintain readable mobile font sizes  
• Maintain sufficient contrast  
• Be keyboard navigable  
• Avoid horizontal scroll on narrow viewports  

Video and images must resize responsively.

---

# 11. Developer Workflow Standards

No silent deletions.  
No rewriting movement copy without explicit approval.  
No risky global search/replace.  
Changes must be small and reviewable.  

After each change:

• Verify layout integrity  
• Verify mobile responsiveness  
• Verify link functionality  
• Verify GitHub Pages output matches expectation  

---

# 12. Pull Request Compliance Requirement

Any pull request that:

• Modifies the Hero  
• Moves or replaces the video  
• Alters the footer block  
• Adds or removes navigation items  
• Rewrites movement copy  

must include the line:

Reviewed against PHIERS Developer Constitution v1.0 — compliant.

If structural deviation is proposed, the PR must clearly justify why it does not conflict with this document.

---

# 13. Working Agreement for Developers

You are not designing a startup site.  
You are implementing a movement architecture.

Your role is to make the existing message:

• Clearer  
• More stable  
• More accessible  
• More technically reliable  

Never more “marketable.”

When in doubt:

Preserve the copy.  
Preserve the hierarchy.  
Preserve the structure.  
Choose clarity over cleverness.  
Do less, not more.  

The integrity of the message is more important than aesthetic experimentation.

---

# 14. Encoding & Professional Presentation Standards

All files must use UTF-8 encoding.

Garbled characters (mojibake such as â€™, â€œ, �) are unacceptable.

Before committing changes:

• Verify special characters render correctly  
• Confirm no encoding corruption occurred  
• Check GitHub preview rendering  
• Check live GitHub Pages rendering  

Professional presentation standards require:

• No broken images  
• No placeholder text  
• No malformed punctuation  
• No casual formatting artifacts  
• No emoji use unless explicitly approved  

The site must present as stable civic infrastructure — not a draft document.

---

# 15. Definition of Done (Homepage)

The homepage is complete only when:

✔ Canonical Hero present  
✔ Video properly embedded  
✔ Unified navigation functional  
✔ Images standardized  
✔ Footer intact  
✔ Timestamp visible  
✔ Accessibility validated  
✔ No horizontal mobile scroll  
✔ All internal links working  

---

END OF DOCUMENT  
Version 1.0  
