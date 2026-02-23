# PHIERS Claude Working Instructions
## Last verified: February 22, 2026

---

## THE GOLDEN RULE

**Never use the project source files as a base for edits.**

The project files contain Cloudflare email obfuscation (`cdn-cgi` scripts) that corrupts the nav JavaScript every time it is removed. Always use the most recent verified output files as the baseline.

---

## WHAT MUST NEVER BE MODIFIED

### 1. The Nav JS Block

Every HTML file ends with this exact script block before `</body></html>`. Do not rewrite, replace, or regenerate it. Only append cleanly after it if needed.

```html
<script>
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  if (!navLinks) return;
  navLinks.classList.toggle('active');
  if (navLinks.classList.contains('active')) {
    if (menuIcon) menuIcon.style.display = 'none';
    if (closeIcon) closeIcon.style.display = 'inline';
  } else {
    if (menuIcon) menuIcon.style.display = 'inline';
    if (closeIcon) closeIcon.style.display = 'none';
  }
}
function toggleDropdown(event) {
  event.stopPropagation();
  let btn = event.target;
  while (btn && !btn.classList.contains('dropbtn')) { btn = btn.parentElement; }
  if (!btn) return;
  const dropdown = btn.nextElementSibling;
  if (!dropdown) return;
  document.querySelectorAll('.dropdown-content').forEach(d => { if (d !== dropdown) d.classList.remove('show'); });
  dropdown.classList.toggle('show');
}
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropbtn')) {
      document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show'));
    }
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    if (nav && navLinks && !nav.contains(event.target) && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      const menuIcon = document.querySelector('.menu-icon');
      const closeIcon = document.querySelector('.close-icon');
      if (menuIcon) menuIcon.style.display = 'inline';
      if (closeIcon) closeIcon.style.display = 'none';
    }
  });
});
</script>
```

---

### 2. The Nav HTML Block

Every page uses this identical `<nav>` block. Do not modify it except through an explicit authorized change to all 20 pages simultaneously.

```html
<nav>
    <!-- Mobile Menu Toggle -->
    <button class="mobile-menu-toggle" onclick="toggleMobileMenu()" aria-label="Toggle menu">
      <span class="menu-icon">☰</span>
      <span class="close-icon" style="display: none;">✕</span>
    </button>
    
    <!-- Navigation Links -->
        <div class="nav-links">
      <a href="index.html">Home</a>
      
      <div class="dropdown">
        <button class="dropbtn strategy-dropbtn" onclick="toggleDropdown(event)">⚡ Strategy ▼</button>
        <div class="dropdown-content">
          <a href="Telehealth-Insurance.html" style="color:#f5c842;">Telehealth vs Insurance ⚡</a>
          <a href="OVERVIEW.html">Overview</a>
          <a href="Crisis.html">Crisis</a>
          <a href="SimpleMath.html">Simple Math</a>
          <a href="5D_Solutions.html">5D Solutions</a>
          <a href="Leverage.html">Leverage</a>
          <a href="Why-Change-Required.html">Why Change Required</a>
          <a href="Unions-Strategy.html">Union Strategy</a>
        </div>
      </div>
      
      <a href="Quickstart.html" title="Understand the movement in 60 seconds">How It Works</a>
      <a href="action.html" title="Sign, organize, or join the pressure system">Take Action</a>
      <a href="SOTU-Pre-Sponse.html" style="color:#f5c842; font-weight:700;">SOTU Response 📺</a>
      <a href="Veterans.html" style="color:#ef5350; font-weight:700;">Veterans 🎖</a>
      <a href="Donate.html">Donate</a>
      
      <div class="dropdown">
        <button class="dropbtn" onclick="toggleDropdown(event)">Resources ▼</button>
        <div class="dropdown-content">
          <a href="Veterans.html" style="color:#ef5350; font-weight:700;">Veterans 🎖</a>
          <a href="real-stories.html">Real Stories</a>
          <a href="Media.html">Media</a>
          <a href="FAQ.html">FAQ</a>
          <a href="About.html">About</a>
          <a href="Our-Origins.html">Origins</a>
        </div>
      </div>
    </div>
  </nav>
```

---

### 3. The Footer Block

Every page uses this identical `<footer>` block.

```html
<footer>
    <p><strong>PHIERS — Make America Better and Healthier</strong></p>
    <p style="font-size: 1.05em; color: #c8e6c9; font-weight: 500; margin: 1rem 0;">
      PHIERS is a citizen-powered movement using the strength of numbers to force Congress to do its job — fix healthcare, protect jobs, prevent trade and hot wars, and defend the safety net. Either they serve the people, or we replace them. Period.
    </p>
    <p>
      A public-interest pressure movement. Not a company. Not a product. Not a PAC.
    </p>
    
    <div class="footer-nav-links">
      <a href="index.html">Home</a>
      <a href="Quickstart.html">How It Works</a>
      <a href="OVERVIEW.html">OVERVIEW</a>
      <a href="Crisis.html">Crisis</a>
      <a href="SimpleMath.html">Simple Math</a>
      <a href="5D_Solutions.html">5D Solutions</a>
      <a href="action.html">Sign the PHIERS Petition</a>
      <a href="Leverage.html">Leverage</a>
      <a href="FAQ.html">FAQ</a>
      <a href="Resources.html">Resources</a>
      <a href="Media.html">Media</a>
      <a href="About.html">About</a>
      <a href="Donate.html">Donate</a>
    </div>
    
    <p style="margin-top: 2rem; font-size: 0.85rem;">
      Contact: <a href="mailto:info@phiers.org">info@phiers.org</a> | 
      <a href="tel:+19163068967">916-306-8967</a>
    </p>
    
    <div class="constitutional-disclaimer">
      <p>
        PHIERS is a public-interest movement — not a company, not a product.<br>
        The only thing missing is you.
      </p>
    </div>
    
    <p style="margin-top: 2rem; text-align: center;; font-size: 0.85em; color: #666;">
      Version: 2026-02-20 22:43:50</p>
  </footer>
```

---

## CORRECT FILE STRUCTURE (every page)

Every HTML file must follow this structure exactly:

```
<!DOCTYPE html>
<html lang="en">
<head>
  ... meta, title, style ...
</head>
<body>
  <nav> ... </nav>          ← NEVER MODIFY
  
  ... page content ...
  
  <footer> ... </footer>    ← NEVER MODIFY
  
  <!-- Image Modal (pages that have it) -->
  <div id="imageModal"> ... </div>
  <script> ... initImageModal ... </script>
  
  <!-- Nav JS — NEVER MODIFY, NEVER REMOVE -->
  <script>
    function toggleMobileMenu() { ... }
    function toggleDropdown() { ... }
    document.addEventListener('DOMContentLoaded', ...) { ... }
  </script>
</body>
</html>
```

---

## KNOWN HAZARDS

### Cloudflare (cdn-cgi)
The project source files contain CF email obfuscation. If you ever pull from the project source as a base, strip these immediately:
- Remove: `<script data-cfasync="false" src="/cdn-cgi/scripts/..."></script>`
- Replace any `<a href="/cdn-cgi/l/email-protection#...">` with `<a href="mailto:info@phiers.org">info@phiers.org</a>`
- After removing the CF decode script, check for orphan `<script>` tags left behind — remove them

### Double script tags
Removing the CF decode script sometimes leaves an orphan `<script>` tag, producing `<script>\n<script>\nfunction toggleMobileMenu` which breaks all JS. Fix: `c.replace('<script>\n<script>', '<script>')`

### File truncation
Every file must end with `</script>\n</body>\n</html>`. After any edit, verify with: `c.strip().endswith('</html>')`

### No regex
Never use `re.sub()` or any regex on these files. Use only `str.replace()` and position-based string slicing.

---

## SAFE EDITING ZONE

Make content edits only to the section between `</nav>` and `<footer>`. That is the only zone that should change during normal content work.

---

## ALL 20 PAGES

```
About.html         action.html        Crisis.html
Donate.html        FAQ.html           index.html
Leverage.html      Media.html         Our-Origins.html
OVERVIEW.html      Quickstart.html    real-stories.html
Resources.html     SimpleMath.html    5D_Solutions.html
Unions-Strategy.html                  Why-Change-Required.html
Veterans.html      SOTU-Pre-Sponse.html
Telehealth-Insurance.html
```

Plus: `Telehealth_Benefits.jpg`

---

## VERIFICATION CHECKLIST (run after any edit)

For every modified page confirm:
- `c.strip().endswith('</html>')` → True
- `'cdn-cgi' not in c` → True
- `'toggleMobileMenu' in c` → True
- `'toggleDropdown' in c` → True
- `'DOMContentLoaded' in c` → True
- `'Telehealth-Insurance.html' in c` → True (nav present)
- `'<script>\n<script>' not in c` → True (no double tags)
- `'22 million' not in c` → True
- `'citizen coalition' not in c` → True
