/**
 * Portfolio Website — Main JavaScript
 * Daniel Tso — Construction Project Manager
 * Dark mode creative overhaul
 */

// ==================== UTILITY FUNCTIONS ====================

function throttle(func, wait) {
  let waiting = false;
  return function () {
    if (!waiting) {
      func.apply(this, arguments);
      waiting = true;
      setTimeout(() => { waiting = false; }, wait);
    }
  };
}

// ==================== DOM ELEMENTS ====================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const scrollToTopBtn = document.getElementById('scrollToTop');
const scrollProgress = document.getElementById('scrollProgress');
const sections = document.querySelectorAll('section[id]');

// ==================== MOBILE MENU ====================

function closeMenu() {
  navMenu.classList.remove('is-open');
  navToggle.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

function openMenu() {
  navMenu.classList.add('is-open');
  navToggle.classList.add('is-open');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  navMenu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      if (navMenu.classList.contains('is-open')) closeMenu();
    }
  });
}

// ==================== FOCUS TRAP (ACCESSIBILITY) ====================

if (navMenu) {
  navMenu.addEventListener('keydown', (e) => {
    if (!navMenu.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeMenu();
      navToggle.focus();
      return;
    }

    if (e.key === 'Tab') {
      const focusableElements = navMenu.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length === 0) return;

      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  });
}

// ==================== SMOOTH SCROLLING ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = navbar ? navbar.offsetHeight : 70;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

// ==================== SCROLL PROGRESS BAR ====================

function updateScrollProgress(scrollY) {
  if (!scrollProgress) return;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
  scrollProgress.style.width = progress + '%';
}

// ==================== HERO PARALLAX ====================

const heroBackground = document.querySelector('.hero__background');

function updateParallax(scrollY) {
  if (!heroBackground) return;
  const heroSection = document.getElementById('home');
  if (!heroSection) return;
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
  if (scrollY < heroBottom) {
    heroBackground.style.transform = 'translateY(' + (scrollY * 0.3) + 'px)';
  }
}

// ==================== CONSOLIDATED SCROLL HANDLER ====================

function highlightActiveSection(scrollY) {
  const navHeight = navbar ? navbar.offsetHeight : 70;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - navHeight - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector('.nav__link[href="#' + sectionId + '"]');

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('nav__link--active');
      } else {
        navLink.classList.remove('nav__link--active');
      }
    }
  });
}

const handleScroll = throttle(() => {
  const scrollY = window.scrollY;

  // Navbar scroll effect
  if (navbar) {
    if (scrollY > 50) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }

  // Active section highlighting
  highlightActiveSection(scrollY);

  // Scroll-to-top button
  if (scrollToTopBtn) {
    if (scrollY > 500) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }

  // Scroll progress bar
  updateScrollProgress(scrollY);

  // Hero parallax
  updateParallax(scrollY);
}, 16);

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

// ==================== SCROLL TO TOP ====================

if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==================== ANIMATED COUNTERS ====================

let countersAnimated = false;

function animateCounters() {
  if (countersAnimated) return;
  countersAnimated = true;

  const counters = document.querySelectorAll('.impact__stat-number');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const prefix = counter.getAttribute('data-prefix') || '';
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      counter.textContent = prefix + current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  });
}

// ==================== SCROLL ANIMATIONS ====================

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.getAttribute('data-delay');
      if (delay) {
        el.style.transitionDelay = delay + 'ms';
      }
      el.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Counter observer — triggers when impact section enters viewport
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      counterObserver.disconnect();
    }
  });
}, {
  threshold: 0.3
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    animationObserver.observe(el);
  });

  const impactSection = document.getElementById('impact');
  if (impactSection) {
    counterObserver.observe(impactSection);
  }
});

// ==================== COPYRIGHT YEAR ====================

function updateCopyrightYear() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

updateCopyrightYear();

// ==================== EXTERNAL LINKS ====================

document.querySelectorAll('a[href^="http"]').forEach(link => {
  if (!link.href.includes(window.location.hostname)) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});

// ==================== PAGE LOADED STATE ====================

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
