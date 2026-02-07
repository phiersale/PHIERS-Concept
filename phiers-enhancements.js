// PHIERS Universal Enhancements
// Version 1.0 - Created 2026-02-05

// ============================================================================
// 1. CLOSEABLE ORIENTATION PANEL
// ============================================================================
document.addEventListener('DOMContentLoaded', function() {
    const orientationPanel = document.querySelector('.orientation-panel');
    
    if (orientationPanel) {
        // Check if panel was previously closed
        if (localStorage.getItem('phiers-orientation-closed') === 'true') {
            orientationPanel.style.display = 'none';
            return;
        }
        
        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            color: #fff;
            font-size: 28px;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            line-height: 1;
            opacity: 0.7;
            transition: opacity 0.2s;
        `;
        
        closeBtn.addEventListener('mouseenter', () => closeBtn.style.opacity = '1');
        closeBtn.addEventListener('mouseleave', () => closeBtn.style.opacity = '0.7');
        
        closeBtn.addEventListener('click', function() {
            orientationPanel.style.display = 'none';
            localStorage.setItem('phiers-orientation-closed', 'true');
        });
        
        // Make panel position relative for absolute positioning of button
        orientationPanel.style.position = 'relative';
        orientationPanel.appendChild(closeBtn);
    }
});

// ============================================================================
// 2. IMAGE LIGHTBOX (Click to Full Screen)
// ============================================================================
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.id = 'phiers-lightbox';
    lightbox.style.cssText = `
        display: none;
        position: fixed;
        z-index: 10000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.95);
        cursor: pointer;
    `;
    
    const lightboxImg = document.createElement('img');
    lightboxImg.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 95%;
        max-height: 95%;
        object-fit: contain;
        border: 2px solid rgba(76, 175, 80, 0.5);
        border-radius: 8px;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 35px;
        color: #fff;
        font-size: 50px;
        font-weight: bold;
        background: none;
        border: none;
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.2s;
        z-index: 10001;
    `;
    
    closeBtn.addEventListener('mouseenter', () => closeBtn.style.opacity = '1');
    closeBtn.addEventListener('mouseleave', () => closeBtn.style.opacity = '0.8');
    
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
    
    // Function to open lightbox
    function openLightbox(imgSrc) {
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Function to close lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Close on X button click
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeLightbox();
    });
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });
    
    // Make all .graphic-container images clickable
    document.querySelectorAll('.graphic-container img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            openLightbox(this.src);
        });
        
        // Remove existing onclick if present
        img.removeAttribute('onclick');
    });
});

// ============================================================================
// 3. HOMEPAGE OPENING MODAL (index.html only)
// ============================================================================
document.addEventListener('DOMContentLoaded', function() {
    // Only run on homepage
    if (!window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
        return;
    }
    
    // Check if modal was already shown this session
    if (sessionStorage.getItem('phiers-modal-shown') === 'true') {
        return;
    }
    
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'phiers-opening-modal';
    modalOverlay.style.cssText = `
        display: flex;
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.85);
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease-in;
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        padding: 40px;
        border-radius: 12px;
        max-width: 700px;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        border: 2px solid #4caf50;
        box-shadow: 0 0 40px rgba(76, 175, 80, 0.3);
        animation: slideIn 0.4s ease-out;
    `;
    
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 20px;
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        background: none;
        border: none;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.2s;
        z-index: 10000;
    `;
    
    closeBtn.addEventListener('mouseenter', () => closeBtn.style.opacity = '1');
    closeBtn.addEventListener('mouseleave', () => closeBtn.style.opacity = '0.7');
    
    // Modal inner HTML
    modalContent.innerHTML = `
        <h2 style="color: #4caf50; font-size: 1.8em; margin-bottom: 20px; text-align: center; text-shadow: 0 0 20px rgba(76, 175, 80, 0.3);">
            Congress Refuses to Do Their Jobs.<br>We're Forcing Them — Or Replacing Them.
        </h2>
        
        <div style="text-align: center; margin: 25px 0;">
            <img src="https://raw.githubusercontent.com/phiersale/PHIERS-Concept/main/Power_Concedes_Nothing_TEETH.png" 
                 alt="Power Concedes Nothing Without A Demand That Has TEETH - We Are The TEETH" 
                 style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);">
        </div>
        
        <p style="color: #c8e6c9; font-size: 1.05em; line-height: 1.7; margin: 20px 0; text-align: center;">
            This isn't a protest. It's a cooperative intelligence project.
        </p>
        
        <p style="color: #c8e6c9; font-size: 1em; line-height: 1.7; margin: 20px 0;">
            <strong style="color: white;">The fix:</strong> $10K insurance delays and denies. 
            But $600 telehealth delivers care instantly, everywhere. One conversion funds 12 more. 
            Those 12 fund 148. <strong style="color: #4caf50;">Exponential. Unstoppable.</strong>
        </p>
        
        <p style="color: #c8e6c9; font-size: 1em; line-height: 1.7; margin: 20px 0;">
            If Congress authorizes telehealth through the ACA, we trigger universal coverage in 8–13 months 
            — paid for out of savings the moment CMS is allowed to use telehealth where it fits best.
        </p>
        
        <p style="color: #c8e6c9; font-size: 1.05em; line-height: 1.7; margin: 25px 0; text-align: center;">
            <strong style="color: white;">Congress can lead and be heroes — or face the most organized 
            healthcare movement in American history.</strong>
        </p>
        
        <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; margin: 30px 0;">
            <a href="https://c.org/q9vrMCQZsY" target="_blank" style="
                background: linear-gradient(135deg, #4caf50, #2e7d32);
                color: white;
                padding: 14px 32px;
                font-size: 1.1em;
                font-weight: bold;
                border: 2px solid #4caf50;
                border-radius: 8px;
                text-decoration: none;
                display: inline-block;
                transition: all 0.3s;
                box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
            ">✏️ SIGN PETITION NOW</a>
            
            <a href="quickstart.html" style="
                background: linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.1));
                color: white;
                padding: 14px 32px;
                font-size: 1.1em;
                font-weight: bold;
                border: 2px solid #4caf50;
                border-radius: 8px;
                text-decoration: none;
                display: inline-block;
                transition: all 0.3s;
            ">🚀 Quick Start</a>
        </div>
        
        <p style="color: #81c784; font-size: 0.9em; text-align: center; margin-top: 25px; font-style: italic;">
            Close this to see the full roadmap and the complete system.
        </p>
    `;
    
    // Prepend close button
    modalContent.insertBefore(closeBtn, modalContent.firstChild);
    
    // Assemble modal
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    document.body.style.overflow = 'hidden';
    
    // Function to close modal
    function closeModal() {
        modalOverlay.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            modalOverlay.remove();
            document.body.style.overflow = 'auto';
            sessionStorage.setItem('phiers-modal-shown', 'true');
        }, 300);
    }
    
    // Close on X button
    closeBtn.addEventListener('click', closeModal);
    
    // Close on background click
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.parentNode) {
            closeModal();
        }
    });
    
    // Add animations to page
    if (!document.getElementById('phiers-modal-animations')) {
        const style = document.createElement('style');
        style.id = 'phiers-modal-animations';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
            @keyframes slideIn {
                from {
                    transform: translateY(-50px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
});
