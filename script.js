/**
 * Ismail El-Menshawy Portfolio Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Action
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        const links = mobileMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. High-End Navbar Blur and Border Transition on Scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('py-4', 'bg-white/95', 'shadow-md', 'border-gold-200');
            navbar.classList.remove('py-0', 'bg-white/80', 'shadow-sm', 'border-gold-100');
        } else {
            navbar.classList.add('py-0', 'bg-white/80', 'shadow-sm', 'border-gold-100');
            navbar.classList.remove('py-4', 'bg-white/95', 'shadow-md', 'border-gold-200');
        }
    });

});
