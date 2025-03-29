// 🌟 Preloader Animation
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(() => preloader.style.display = "none", 600);
});

// 🌟 Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// 🌟 Dynamic Text Typing Effect
const heroText = document.querySelector(".hero h1");
const phrases = ["Discover India's Hidden Gems", "Your AI-powered Trip Planner", "Personalized Travel Experiences"];
let phraseIndex = 0;
let letterIndex = 0;

function typeText() {
    if (letterIndex < phrases[phraseIndex].length) {
        heroText.textContent += phrases[phraseIndex][letterIndex];
        letterIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(deleteText, 1000); // Pause before deleting
    }
}

function deleteText() {
    if (letterIndex > 0) {
        heroText.textContent = phrases[phraseIndex].slice(0, letterIndex - 1);
        letterIndex--;
        setTimeout(deleteText, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeText, 500); // Pause before typing the next phrase
    }
}

typeText();

// 🌟 Scroll-Triggered Animations
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});

// 🌟 Parallax Effect
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.background-video');
    let scrollPosition = window.scrollY;
    parallax.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});

// 🌟 Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTop");

scrollToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
