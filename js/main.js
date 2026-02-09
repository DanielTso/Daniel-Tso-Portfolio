/**
 * Portfolio Website - Main JavaScript
 * Daniel Tso - Construction Project Manager
 * Refactored with BEM naming conventions
 */

// ==================== UTILITY FUNCTIONS ====================

/**
 * Throttle function — limits execution to once per `wait` ms
 */
function throttle(func, wait) {
  let waiting = false;
  return function () {
    if (!waiting) {
      func.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, wait);
    }
  };
}

// ==================== DOM ELEMENTS ====================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const scrollToTopBtn = document.getElementById('scrollToTop');
const sections = document.querySelectorAll('section[id]');

// ==================== MOBILE MENU ====================

/**
 * Close the mobile menu and restore body scroll
 */
function closeMenu() {
  navMenu.classList.remove('is-open');
  navToggle.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

/**
 * Open the mobile menu and lock body scroll
 */
function openMenu() {
  navMenu.classList.add('is-open');
  navToggle.classList.add('is-open');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('menu-open');
}

if (navToggle && navMenu) {
  // Toggle menu on button click
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when clicking a nav link
  navMenu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      if (navMenu.classList.contains('is-open')) {
        closeMenu();
      }
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
      // Refresh focusable elements each time menu opens (in case DOM changed)
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

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ==================== CONSOLIDATED SCROLL HANDLER ====================

/**
 * Active section highlighting — marks the nav link for the
 * section currently in view with an 'active' class.
 */
function highlightActiveSection(scrollY) {
  const navHeight = navbar ? navbar.offsetHeight : 70;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - navHeight - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('nav__link--active');
      } else {
        navLink.classList.remove('nav__link--active');
      }
    }
  });
}

/**
 * Single scroll handler for all scroll-dependent behavior.
 * Throttled and registered with { passive: true }.
 */
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

  // Scroll-to-top button visibility
  if (scrollToTopBtn) {
    if (scrollY > 500) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  }
}, 100);

window.addEventListener('scroll', handleScroll, { passive: true });

// Run once on load to set initial state
handleScroll();

// ==================== SCROLL TO TOP ====================

if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==================== SCROLL ANIMATIONS ====================

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    animationObserver.observe(el);
  });
});

// ==================== TIMELINE TOGGLE ====================

const timelineToggle = document.getElementById('timelineToggle');
const timelineCollapsed = document.getElementById('timelineCollapsed');

if (timelineToggle && timelineCollapsed) {
  timelineToggle.addEventListener('click', () => {
    const isExpanded = timelineToggle.getAttribute('aria-expanded') === 'true';
    timelineToggle.setAttribute('aria-expanded', String(!isExpanded));
    timelineCollapsed.classList.toggle('is-expanded');

    // Update button text
    if (!isExpanded) {
      timelineToggle.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
    } else {
      timelineToggle.innerHTML = 'View Full History <i class="fas fa-chevron-down"></i>';
    }
  });
}

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
