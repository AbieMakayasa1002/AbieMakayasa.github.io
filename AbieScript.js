// Wait for the window to load
window.addEventListener('load', function () {
    // Hide Preloader
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// Dynamic Parallax Scrolling for Elements
window.addEventListener('scroll', function () {
    const parallaxElements = document.querySelectorAll('.parallax');
    let scrollPos = window.pageYOffset;
    parallaxElements.forEach((el) => {
        el.style.backgroundPositionY = `${scrollPos * 0.5}px`;
    });
});

// Scroll Effect for Smooth Navigation
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        }

        // Close mobile menu if open
        const menu = document.querySelector('.menu');
        const hamburger = document.querySelector('.hamburger');
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Toggle Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Toggle Dark Mode
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', this.checked);
});

// Load Dark Mode preference
window.addEventListener('DOMContentLoaded', (event) => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
});

// Progress Bars Animation for Skills Section
document.addEventListener('DOMContentLoaded', function () {
    const skillBars = document.querySelectorAll('.progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress;
    });
});

// Modal Functionality for Project Gallery
let slideIndex = 1;

// Open Modal and Show Specific Slide
function openModal(slideNum) {
    document.getElementById('modalGallery').style.display = 'block';
    showSlides(slideNum);
    document.body.style.overflow = 'hidden'; // Disable background scrolling
}

// Close Modal
function closeModal() {
    document.getElementById('modalGallery').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable background scrolling
}

// Next/Previous Controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show Slides Based on Index
function showSlides(n) {
    const slides = document.querySelectorAll('.slides');
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
}

// Close Modal When Clicking Outside the Content
window.onclick = function(event) {
    const modal = document.getElementById('modalGallery');
    if (event.target == modal) {
        closeModal();
    }
}

// Contact Form Feedback Functionality
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple Form Validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');

    if (name === '' || email === '' || message === '') {
        feedback.style.color = 'red';
        feedback.textContent = 'Please fill in all fields.';
        return;
    }

    // Simulate Form Submission
    feedback.style.color = 'green';
    feedback.textContent = 'Thank you! Your message has been sent.';
    this.reset();

    // Clear Feedback After 5 Seconds
    setTimeout(function () {
        feedback.textContent = '';
    }, 5000);
});
