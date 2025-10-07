// 🌟 Preloader Animation
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => preloader.style.display = "none", 600);
    }
});

// 🌟 Smooth Scrolling for Navigation Links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 🌟 Dynamic Text Typing Effect
    const heroText = document.querySelector(".hero h1");
    const phrases = [
        "Discover India's Hidden Gems",
        "Your AI-powered Trip Planner",
        "Personalized Travel Experiences"
    ];
    let phraseIndex = 0;
    let letterIndex = 0;

    function typeText() {
        if (!heroText) return;
        if (letterIndex < phrases[phraseIndex].length) {
            heroText.textContent += phrases[phraseIndex][letterIndex];
            letterIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(deleteText, 1000); // Pause before deleting
        }
    }

    function deleteText() {
        if (!heroText) return;
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

    // 🌟 Scroll-Triggered Animations for other sections
    const sections = document.querySelectorAll('.section:not(#how-it-works, #testimonials, #contact)');
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
        if (parallax) {
            parallax.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    });

    // 🌟 Scroll to Top Button
    const scrollToTopBtn = document.getElementById("scrollToTop");

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 🌟 Fade-in Effect for Login Button
    const loginButton = document.querySelector(".cta-button");
    if (loginButton) {
        setTimeout(() => {
            loginButton.style.opacity = "1";
        }, 500); // Delayed appearance for smoothness
    }

    // 🌟 Modal Functionality
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
        // Reset views
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

    // 🌟 Static Features: Ensure they are visible
    const staticFeatures = document.querySelectorAll('.feature-card.static-feature');
    staticFeatures.forEach(function(feature) {
        feature.style.opacity = '1';  // Ensure visibility
        feature.style.animation = 'none';  // Disable any unwanted animations
    });

    // 🌟 Animated Features: Apply fade-in effect if needed
    const animatedFeatures = document.querySelectorAll('.feature-card.fade-in');
    animatedFeatures.forEach(function(feature) {
        feature.style.opacity = '0';  // Start with opacity 0 for fade-in
        feature.classList.add('fade-in');  // Apply fade-in class for animation
    });

    // 🌟 Animate Sections on Scroll (How It Works, Testimonials, Contact)
    const animatedSections = document.querySelectorAll('#how-it-works, #testimonials, #contact');

    // Trigger the animation on load for sections that are already visible in the viewport
    animatedSections.forEach((section) => {
        section.classList.add('animate'); // These sections will always be visible and animated
    });

    // 🌟 Contact Form Submit Handler (Optional Basic Handling)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Simple feedback animation
            const button = contactForm.querySelector("button");
            button.textContent = "Sending...";
            button.disabled = true;

            // Simulate sending (you can replace this with real API call)
            setTimeout(() => {
                button.textContent = "Message Sent!";
                button.style.backgroundColor = "#1b3c32";
                button.style.color = "#fff";
            }, 1500);
        });
    }

    // 🌟 Animate each .step and .testimonial with delay
    const steps = document.querySelectorAll(".step");
    const testimonials = document.querySelectorAll(".testimonial");

    steps.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.2}s`;
    });

    testimonials.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.2}s`;
    });

    // ----------------- Testimonial Film Strip -----------------
    const wrapper = document.querySelector('.testimonial-wrapper');
    if(wrapper) {
        // Duplicate cards for seamless scrolling
        wrapper.innerHTML += wrapper.innerHTML;

        let scrollAmount = 0;
        let speed = 1; // pixels per frame
        let isPaused = false;

        // Pause on hover
        wrapper.addEventListener("mouseenter", () => { isPaused = true; });
        wrapper.addEventListener("mouseleave", () => { isPaused = false; });

        function scrollTestimonials() {
            if(!isPaused) {
                scrollAmount += speed;
                if(scrollAmount >= wrapper.scrollWidth / 2) { 
                    scrollAmount = 0; // reset for infinite effect
                }
                wrapper.style.transform = `translateX(-${scrollAmount}px)`;
            }
            requestAnimationFrame(scrollTestimonials);
        }

        scrollTestimonials();

        // Optional: make speed responsive to screen width
        window.addEventListener("resize", () => {
            if(window.innerWidth < 600) speed = 0.5;
            else speed = 1;
        });
    }
    // ---------------------------------------------------------
});

// 🌟 Trip Planner Backend Communication
function planTrip() {
    const tripData = {
        location: document.getElementById("location").value,
        budget: document.getElementById("budget").value,
        date: document.getElementById("date").value,
        companions: document.getElementById("companions").value,
        activities: document.getElementById("activities").value,
    };

    fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tripData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        displayItinerary(data.itinerary);
    });
}

function displayItinerary(itinerary) {
    let html = "";
    for (let key in itinerary) {
        html += `<p><strong>${key}:</strong> ${itinerary[key]}</p>`;
    }
    document.getElementById("itinerary").innerHTML = html;
}

// 🌟 Features visibility on window load
window.addEventListener('load', function () {
    const featureSections = document.querySelectorAll('.feature-section');
    featureSections.forEach(function(section) {
        section.classList.add('visible');
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const tripModal = document.getElementById("tripModal");
  const openBtn = document.getElementById("openTripModal"); // hero "Start Planning" button
  const closeBtn = tripModal.querySelector(".close-btn");
  const form = document.getElementById("tripForm");

  // Open modal when "Start Planning" is clicked
  openBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent page reload
    tripModal.style.display = "flex";
  });

  // Close modal when "×" is clicked
  closeBtn.addEventListener("click", () => {
    tripModal.style.display = "none";
  });

  // Close modal if clicking outside modal content
  window.addEventListener("click", (e) => {
    if (e.target === tripModal) {
      tripModal.style.display = "none";
    }
  });

  // Handle form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Trip Data:", data);

    alert("✅ Your trip plan is being generated (mock mode).");

    tripModal.style.display = "none"; // auto-close after submit
  });
});
