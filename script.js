// Tema toggle
const toggle = document.querySelector("#sw-checkbox");
const languageToggle = document.querySelector("#languageToggle");
const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

// Salvar a preferência de tema no localStorage
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    toggle.nextElementSibling.querySelector('i').className = 
        document.body.classList.contains('dark-mode') ? 'fas fa-sun' : 'fas fa-moon';
});

// Carregar a preferência de tema ao carregar a página
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.nextElementSibling.querySelector('i').className = 'fas fa-sun';
}

// Mobile menu toggle
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

// Função Scroll
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

// Scroll no responsivo
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

const typingTextElement = document.querySelector('.typing-text');
const phrases = ["Desenvolvedor Front-End", "Front-End Developer", "Desenvolvedor Web", "Engenheiro de Software"];
let phraseIndex = 0; 
let currentText = phrases[phraseIndex];  
typingTextElement.textContent = '';
let index = 0;
let isDeleting = false;

function typeWriter() {
  if (isDeleting) {
    // Apagando letra por letra
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
    // Digitando letra por letra
    typingTextElement.textContent = currentText.substring(0, index + 1);
    index++;
    if (index === currentText.length) {
      isDeleting = true; // Começa a apagar depois de terminar a digitação
      setTimeout(typeWriter, 1000); // Espera um pouco antes de começar a apagar
    } else {
      setTimeout(typeWriter, 100); // Digita letra por letra
    }
  }
}

document.addEventListener('DOMContentLoaded', typeWriter);


// Scroll suave ao clicar no botão de voltar ao topo
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
