/**
 * main.js
 * Comprehensive client-side interaction handler for Clement Benny's Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigationHighlighter();
    initContactFormHandler();
    initInteractionAnimations();
});

/**
 * 1. Synchronize active state styling seamlessly across navigation steps
 */
function initNavigationHighlighter() {
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const hrefAttribute = link.getAttribute('href');
        if (currentPath === hrefAttribute || (currentPath === '' && hrefAttribute === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * 2. Elegant execution handling for the communication interface
 */
function initContactFormHandler() {
    const form = document.getElementById('portfolio-contact-form');
    const feedback = document.getElementById('form-feedback');
    
    if (!form || !feedback) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Extract inputs cleanly
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name && email && message) {
            // Visual feedback transitions
            feedback.className = 'form-status success';
            feedback.innerText = `Thank you, ${name}. Your message transmission was successful.`;
            
            // Clear down structural interface states safely
            form.reset();
            
            // Autohide confirmation state gracefully
            setTimeout(() => {
                feedback.style.opacity = '0';
                setTimeout(() => {
                    feedback.className = 'form-status';
                    feedback.style.opacity = '1';
                }, 400);
            }, 6000);
        }
    });
}

/**
 * 3. Soft loading transitions to emphasize the editorial design feel
 */
function initInteractionAnimations() {
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
        mainContainer.style.opacity = '0';
        mainContainer.style.transition = 'opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
        
        requestAnimationFrame(() => {
            mainContainer.style.opacity = '1';
        });
    }
}