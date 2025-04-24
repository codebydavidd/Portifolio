// Tema toggle
const toggle = document.querySelector("#sw-checkbox");
const languageToggle = document.querySelector("#languageToggle");
const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

// Salvar a preferência de tema no localStorage
if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        const icon = toggle.nextElementSibling?.querySelector('i');
        if (icon) {
            icon.className = document.body.classList.contains('dark-mode') ? 'fas fa-sun' : 'fas fa-moon';
        }
    });

    // Carregar a preferência de tema ao carregar a página
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        const icon = toggle.nextElementSibling?.querySelector('i');
        if (icon) icon.className = 'fas fa-sun';
    }
}

// Mobile menu toggle
if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
            menu.classList.remove('active');
        }
    });

    // Fechar menu ao clicar em link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
}

// Função Scroll
function onScroll() {
    if (navigation) {
        if (window.scrollY > 0) {
            navigation.classList.add('scroll');
        } else {
            navigation.classList.remove('scroll');
        }
    }

    if (backToTopButton) {
        if (window.scrollY > 550) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }
}

window.addEventListener('scroll', onScroll);

// ScrollReveal se disponível
if (typeof ScrollReveal !== 'undefined') {
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
}

// Efeito de digitação
const typingTextElement = document.querySelector('.typing-text');
const phrases = ["Desenvolvedor Full-Stack", "Engenheiro de Software", "Software Engineer", "Full Stack Developer"];
let phraseIndex = 0;
let currentText = phrases[phraseIndex];
let index = 0;
let isDeleting = false;

function typeWriter() {
    if (!typingTextElement) return;

    if (isDeleting) {
        typingTextElement.textContent = currentText.substring(0, index - 1);
        index--;
        if (index === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            currentText = phrases[phraseIndex];
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, 50);
        }
    } else {
        typingTextElement.textContent = currentText.substring(0, index + 1);
        index++;
        if (index === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1000);
        } else {
            setTimeout(typeWriter, 100);
        }
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);

// Scroll suave para o topo
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
