// Theme toggle functionality
const toggle = document.querySelector("#sw-checkbox");
const languageToggle = document.querySelector("#languageToggle");
const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

// Theme toggle
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.nextElementSibling.querySelector('i').className = 
        document.body.classList.contains('dark-mode') ? 'fas fa-sun' : 'fas fa-moon';
});

// Mobile menu toggle
menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Scroll functionality
function onScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll');
    } else {
        navigation.classList.remove('scroll');
    }

    if (scrollY > 550) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

window.addEventListener('scroll', onScroll);

// Initialize ScrollReveal with responsive distances
ScrollReveal({
    origin: 'bottom',
    distance: window.innerWidth > 768 ? '50px' : '30px',
    duration: 1000
}).reveal(`
    #home, 
    #home img, 
    #about, 
    #about header, 
    #about p,
    #about img,
    #projects,
    #projects header,
    #projects .card,
    #knowledge,
    #knowledge header,
    #knowledge .card,
    #contact,
    #contact header
`);