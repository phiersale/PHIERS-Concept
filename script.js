/* ============================================================
   PHIERdUP — Core JavaScript
   Cleaned for multi‑page architecture (no SPA section switching)
   All modal, lightbox, CTA, and header behaviors preserved
   ============================================================ */

/* ------------------------------
   CLOSE CONSEQUENCES POPUP
------------------------------ */
function closeConsequencesPopup() {
    const popup = document.getElementById('consequencesPopup');
    if (popup) popup.style.display = 'none';
}

/* ------------------------------
   GENERIC POPUP OPEN/CLOSE
------------------------------ */
function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) popup.classList.add('active');
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) popup.classList.remove('active');
}

/* ------------------------------
   SECONDARY NAV TOGGLE
------------------------------ */
function toggleSecondaryNav() {
    const secondary = document.getElementById('secondaryNav');
    const moreButton = document.querySelector('[onclick="toggleSecondaryNav()"]');

    if (secondary && moreButton) {
        if (secondary.style.display === 'none' || secondary.style.display === '') {
            secondary.style.display = 'grid';
            moreButton.textContent = '▲ More Resources';
        } else {
            secondary.style.display = 'none';
            moreButton.textContent = '▼ More Resources';
        }
    }
}

/* ------------------------------
   LIGHTBOX IMAGE VIEWER
------------------------------ */
function openLightbox(imageSrc) {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        const img = modal.querySelector('.lightbox-content');
        if (img) img.src = imageSrc;
        modal.style.display = 'flex';
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) modal.style.display = 'none';
}

/* Close lightbox when clicking outside image */
window.addEventListener('click', function(event) {
    const modal = document.getElementById('lightboxModal');
    if (modal && event.target === modal) {
        closeLightbox();
    }
});

/* Close lightbox on ESC key */
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

/* Enable click‑to‑enlarge on all images inside .graphic-container */
window.addEventListener('load', function() {
    const graphicImages = document.querySelectorAll('.graphic-container img');
    graphicImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            openLightbox(this.src);
        });
    });
});

/* ------------------------------
   HEADER CTA TEXT (per page)
   — Multi‑page version —
   Each page can set:
   window.headerCTA = { title, subtitle, action }
------------------------------ */
function updateHeaderCTA() {
    if (!window.headerCTA) return;

    const title = document.getElementById('header-cta-title');
    const subtitle = document.getElementById('header-cta-subtitle');
    const action = document.getElementById('header-cta-action');

    if (title && window.headerCTA.title) title.textContent = window.headerCTA.title;
    if (subtitle && window.headerCTA.subtitle) subtitle.textContent = window.headerCTA.subtitle;
    if (action && window.headerCTA.action) action.textContent = window.headerCTA.action;
}

/* Run CTA update on page load */
window.addEventListener('DOMContentLoaded', updateHeaderCTA);

