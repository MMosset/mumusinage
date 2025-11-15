// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observer tous les éléments à animer
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.machine-card, .priority-card, .highlight-item, .contact-item, .founder-content, .product-card, .download-card');
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Menu hamburger pour mobile
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

// Fermer le menu quand on clique sur un lien
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const menu = document.getElementById('nav-menu');
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        });
    });
});
