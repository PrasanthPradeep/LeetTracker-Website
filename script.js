// script.js — LC Freq Neo-Brutalist interactions

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    // Animate hamburger
    const spans = mobileToggle.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
    }
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      const spans = mobileToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection Observer for scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections for scroll animation
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Make first section (hero) visible immediately
const heroSection = document.querySelector('.hero');
if (heroSection) {
  heroSection.style.opacity = '1';
  heroSection.style.transform = 'translateY(0)';
}

console.log('LC Freq extension site loaded — Neo-Brutalist edition');


// Support Modal Toggle
const supportBtn = document.getElementById('supportBtn');
const supportModal = document.getElementById('supportModal');
const supportClose = document.getElementById('supportClose');

if (supportBtn && supportModal && supportClose) {
  supportBtn.addEventListener('click', () => {
    supportModal.classList.add('active');
  });

  supportClose.addEventListener('click', () => {
    supportModal.classList.remove('active');
  });

  supportModal.addEventListener('click', (e) => {
    if (e.target === supportModal) {
      supportModal.classList.remove('active');
    }
  });
}
