// Smooth scrolling for navigation
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Reveal sections on scroll
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Form submission alert
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}, for reaching out! We’ll get back to you soon.`);
    this.reset(); // Reset the form fields
});

// Real-time form validation
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function validateInput(input, regex, errorMsg) {
    if (!regex.test(input.value)) {
        input.setCustomValidity(errorMsg);
        input.reportValidity();
    } else {
        input.setCustomValidity('');
    }
}

nameInput.addEventListener('input', () => {
    validateInput(nameInput, /^[A-Za-z\s]{3,}$/, 'Name must be at least 3 characters long.');
});

emailInput.addEventListener('input', () => {
    validateInput(emailInput, /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, 'Enter a valid email address.');
});

messageInput.addEventListener('input', () => {
    validateInput(messageInput, /^.{10,}$/, 'Message must be at least 10 characters long.');
});

// Back-to-top button logic
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
