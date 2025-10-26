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
    const elementsToAnimate = document.querySelectorAll('.machine-card, .priority-card, .highlight-item, .contact-item, .founder-content, .product-card');
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Gestion du lien actif dans la navigation - VERSION CORRIGÉE
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        // Retirer d'abord toutes les classes active
        link.classList.remove('active');
        
        const linkPage = link.getAttribute('href');
        
        // Ajouter la classe active au bon lien
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});