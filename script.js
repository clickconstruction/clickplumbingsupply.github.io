// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you within 24 hours.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .product-category, .location');
    animateElements.forEach(el => observer.observe(el));
});

// Emergency contact highlight
const emergencyElements = document.querySelectorAll('.contact-item:first-child');
emergencyElements.forEach(el => {
    el.style.background = 'linear-gradient(135deg, #dc2626, #ef4444)';
    el.style.color = 'white';
    el.style.fontWeight = 'bold';
});

// Service area map (placeholder for future implementation)
function initServiceAreas() {
    const locations = ['Kennedy', 'Stockdale', 'Rockport', 'Hondo', 'Bernie', 'Rock Springs'];
    
    // Add click handlers to location elements
    document.querySelectorAll('.location').forEach(location => {
        location.addEventListener('click', () => {
            const locationName = location.textContent;
            alert(`We provide 24/7 service to ${locationName} and surrounding areas. Contact us for immediate assistance!`);
        });
    });
}

// Initialize service areas
document.addEventListener('DOMContentLoaded', initServiceAreas);

// 24/7 service counter
function updateServiceCounter() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Update any service counter elements
    const counterElements = document.querySelectorAll('.service-counter');
    counterElements.forEach(el => {
        el.textContent = `${hours}:${minutes}:${seconds}`;
    });
}

// Update counter every second
setInterval(updateServiceCounter, 1000);

// Add emergency service banner
function addEmergencyBanner() {
    const banner = document.createElement('div');
    banner.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #dc2626, #ef4444);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
        z-index: 1000;
        font-weight: bold;
        cursor: pointer;
        animation: pulse 2s infinite;
    `;
    banner.innerHTML = '<i class="fas fa-phone"></i> 24/7 Emergency';
    banner.addEventListener('click', () => {
        window.location.href = 'tel:+15123600599';
    });
    
    document.body.appendChild(banner);
}

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Initialize emergency banner
document.addEventListener('DOMContentLoaded', addEmergencyBanner);

// Service type selector enhancement
document.addEventListener('DOMContentLoaded', () => {
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        serviceSelect.addEventListener('change', (e) => {
            const selectedService = e.target.value;
            if (selectedService === 'emergency') {
                alert('For emergency service, please call our 24/7 line immediately!');
            }
        });
    }
});

// Add loading animation for service cards
function addLoadingAnimation() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
}

// Initialize loading animations
document.addEventListener('DOMContentLoaded', addLoadingAnimation); 