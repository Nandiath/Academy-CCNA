// Accordion functionality
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('svg');
    
    // Close all other accordions
    const allButtons = document.querySelectorAll('.accordion-button');
    const allContents = document.querySelectorAll('.accordion-content');
    const allIcons = document.querySelectorAll('.accordion-button svg');
    
    allButtons.forEach((btn, index) => {
        if (btn !== button) {
            allContents[index].classList.add('hidden');
            allIcons[index].classList.remove('rotate-180');
        }
    });
    
    // Toggle current accordion
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('bg-dark-blue', 'bg-opacity-95', 'backdrop-blur-sm');
    } else {
        header.classList.remove('bg-dark-blue', 'bg-opacity-95', 'backdrop-blur-sm');
    }
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-hover');
    const sections = document.querySelectorAll('section');
    
    cards.forEach(card => observer.observe(card));
    sections.forEach(section => observer.observe(section));
});

// Add CSS animation class
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.6s ease-in-out;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

