// 🌟 Preloader Animation
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => preloader.style.display = "none", 600);
    }

    // 🌟 Features visibility on window load
    const featureSections = document.querySelectorAll('.feature-section');
    featureSections.forEach(section => section.classList.add('visible'));
});

// 🌟 Smooth Scrolling for Navigation Links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 🌟 Dynamic Text Typing Effect
    const heroText = document.querySelector(".hero h1");
    const phrases = [
        "Discover India's Hidden Gems",
        "Your AI-powered Trip Planner",
        "Personalized Travel Experiences"
    ];
    let phraseIndex = 0, letterIndex = 0;

    function typeText() {
        if (!heroText) return;
        if (letterIndex < phrases[phraseIndex].length) {
            heroText.textContent += phrases[phraseIndex][letterIndex++];
            setTimeout(typeText, 100);
        } else setTimeout(deleteText, 1000);
    }

    function deleteText() {
        if (!heroText) return;
        if (letterIndex > 0) {
            heroText.textContent = phrases[phraseIndex].slice(0, --letterIndex);
            setTimeout(deleteText, 50);
        } else {
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeText, 500);
        }
    }
    typeText();

    // 🌟 Scroll-Triggered Animations
    const sections = document.querySelectorAll('.section:not(#how-it-works, #testimonials, #contact)');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('animate');
        });
    }, { threshold: 0.2 });
    sections.forEach(section => observer.observe(section));

    // 🌟 Parallax Effect
    window.addEventListener('scroll', () => {
        const parallax = document.querySelector('.background-video');
        if (parallax) parallax.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    });

    // 🌟 Scroll to Top
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 🌟 Fade-in for Login Button
    const loginButton = document.querySelector(".cta-button");
    if (loginButton) setTimeout(() => loginButton.style.opacity = "1", 500);

    // 🌟 Auth Modal
    const openModal = document.getElementById("openModal");
    const authModal = document.getElementById("authModal");
    const closeModal = document.getElementById("closeModal");
    const loginTab = document.getElementById("loginTab");
    const signupTab = document.getElementById("signupTab");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const otpForm = document.getElementById("otpForm");
    const otpTrigger = document.getElementById("otpLoginTrigger");
    const backToLogin = document.getElementById("backToLogin");

    openModal?.addEventListener("click", () => {
        authModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
    closeModal?.addEventListener("click", () => {
        authModal.style.display = "none";
        document.body.style.overflow = "auto";
        loginForm.classList.add("active-form");
        signupForm.classList.remove("active-form");
        otpForm.classList.remove("active-form");
        loginTab.classList.add("active-tab");
        signupTab.classList.remove("active-tab");
    });
    loginTab?.addEventListener("click", () => {
        loginForm.classList.add("active-form");
        signupForm.classList.remove("active-form");
        otpForm.classList.remove("active-form");
        loginTab.classList.add("active-tab");
        signupTab.classList.remove("active-tab");
    });
    signupTab?.addEventListener("click", () => {
        signupForm.classList.add("active-form");
        loginForm.classList.remove("active-form");
        otpForm.classList.remove("active-form");
        signupTab.classList.add("active-tab");
        loginTab.classList.remove("active-tab");
    });
    otpTrigger?.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("active-form");
        otpForm.classList.add("active-form");
    });
    backToLogin?.addEventListener("click", (e) => {
        e.preventDefault();
        otpForm.classList.remove("active-form");
        loginForm.classList.add("active-form");
    });

    // 🌟 Contact Form
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const button = contactForm.querySelector("button");
            button.textContent = "Sending...";
            button.disabled = true;
            setTimeout(() => {
                button.textContent = "Message Sent!";
                button.style.backgroundColor = "#1b3c32";
                button.style.color = "#fff";
            }, 1500);
        });
    }

    // 🌟 Testimonials Film Strip
    const wrapper = document.querySelector('.testimonial-wrapper');
    if (wrapper) {
        wrapper.innerHTML += wrapper.innerHTML;
        let scrollAmount = 0, speed = 1, isPaused = false;
        wrapper.addEventListener("mouseenter", () => { isPaused = true; });
        wrapper.addEventListener("mouseleave", () => { isPaused = false; });
        function scrollTestimonials() {
            if (!isPaused) {
                scrollAmount += speed;
                if (scrollAmount >= wrapper.scrollWidth / 2) scrollAmount = 0;
                wrapper.style.transform = `translateX(-${scrollAmount}px)`;
            }
            requestAnimationFrame(scrollTestimonials);
        }
        scrollTestimonials();
        window.addEventListener("resize", () => {
            speed = window.innerWidth < 600 ? 0.5 : 1;
        });
    }
});

// 🌟 Trip Modal Functionality + JSON Integration
document.addEventListener("DOMContentLoaded", () => {
    const tripModal = document.getElementById("tripModal");
    const openBtn = document.getElementById("openTripModal");
    const closeBtn = tripModal?.querySelector(".close-btn");
    const form = document.getElementById("tripForm");
    const output = document.getElementById("output");

    openBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        tripModal.style.display = "flex";
    });

    closeBtn?.addEventListener("click", () => {
        tripModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === tripModal) tripModal.style.display = "none";
    });

    // ✅ Local JSON-driven Trip Generation (Flask backend)
    form?.addEventListener("submit", async (e) => {
        e.preventDefault();

        const tripData = {
            destination: document.getElementById("location").value,
            date: document.getElementById("date").value,
            budget: document.getElementById("budget").value,
            companions: document.getElementById("companions").value,
            activities: document.getElementById("activities").value,
        };

        output.innerHTML = "⏳ Generating itinerary...";

        try {
            const response = await fetch("http://127.0.0.1:5000/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(tripData)
            });

            const data = await response.json();

            if (data.error) {
                output.innerHTML = `<p style="color:red;">⚠️ ${data.error}</p>`;
            } else {
                const hotelCards = data.hotels.map(h => `
                    <div class="hotel-card">
                        <h4>${h.name}</h4>
                        <p>⭐ ${h.rating} | ₹${h.price_min} - ₹${h.price_max}</p>
                        <p><strong>Amenities:</strong> ${h.amenities.join(", ")}</p>
                    </div>
                `).join("");

                const itineraryCards = data.itinerary?.plan.map(p => `
                    <div class="itinerary-day">
                        <h4>Day ${p.day}</h4>
                        <p><strong>Morning:</strong> ${p.morning}</p>
                        <p><strong>Afternoon:</strong> ${p.afternoon}</p>
                        <p><strong>Evening:</strong> ${p.evening}</p>
                    </div>
                `).join("");

                const hiddenGems = data.hidden_gems.map(g => `<li>${g}</li>`).join("");
                const tips = data.tips.map(t => `<li>${t}</li>`).join("");

                output.innerHTML = `
                    <div class="trip-output-container">
                        <h2>🌍 ${data.destination}</h2>
                        <p><strong>State:</strong> ${data.state}</p>
                        <p><strong>Best Time to Visit:</strong> ${data.meta?.best_time_to_visit || "N/A"}</p>
                        <p><strong>Average Budget:</strong> ${data.meta?.avg_daily_budget_inr || "N/A"}</p>

                        <h3>🏨 Recommended Hotels</h3>
                        <div class="hotel-grid">${hotelCards}</div>

                        <h3>🗓 Itinerary (${data.itinerary?.duration_days || "?"} Days)</h3>
                        <div class="itinerary-grid">${itineraryCards}</div>

                        <h3>💎 Hidden Gems</h3>
                        <ul>${hiddenGems}</ul>

                        <h3>💡 Travel Tips</h3>
                        <ul>${tips}</ul>
                    </div>
                `;
            }

        } catch (err) {
            console.error(err);
            output.innerHTML = "⚠️ Something went wrong with the backend.";
        }
    });
});
