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

// ==================== THEME TOGGLE ====================

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }
}

function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    setTheme('light');
  }
  // else default dark (no data-theme attr needed)
}

initTheme();

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'light' ? 'dark' : 'light');
  });
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

  // Kinetic hero text reveal
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tagline = document.querySelector('.hero__tagline');
  if (tagline) {
    if (reducedMotion) {
      tagline.querySelectorAll('.hero__tagline-word').forEach(word => {
        word.style.opacity = '1';
        word.style.transform = 'translateY(0)';
      });
      tagline.classList.add('is-revealed');
    } else {
      setTimeout(() => {
        tagline.classList.add('is-revealed');
      }, 200);
    }
  }
});

// ==================== MODAL SYSTEM ====================

let previousFocusElement = null;

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  previousFocusElement = document.activeElement;
  modal.classList.add('is-open');
  document.body.classList.add('modal-open');

  // Focus the close button
  const closeBtn = modal.querySelector('.modal__close');
  if (closeBtn) closeBtn.focus();
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  if (previousFocusElement) {
    previousFocusElement.focus();
    previousFocusElement = null;
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal.is-open').forEach(modal => {
    modal.classList.remove('is-open');
  });
  document.body.classList.remove('modal-open');
  if (previousFocusElement) {
    previousFocusElement.focus();
    previousFocusElement = null;
  }
}

// ESC key closes modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const openModalEl = document.querySelector('.modal.is-open');
    if (openModalEl) {
      closeAllModals();
    }
  }
});

// Backdrop click closes modal
document.querySelectorAll('[data-modal-close]').forEach(el => {
  el.addEventListener('click', closeAllModals);
});

// Focus trap for modals
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  });
});


// ==================== CASE STUDY MODALS ====================

document.querySelectorAll('[data-case-study]').forEach(btn => {
  btn.addEventListener('click', () => {
    const slug = btn.getAttribute('data-case-study');
    const template = document.getElementById('case-study-' + slug);
    const body = document.getElementById('caseStudyBody');
    if (template && body) {
      body.innerHTML = template.innerHTML;
      openModal('caseStudyModal');
    }
  });
});


// ==================== LIGHTBOX ====================

document.querySelectorAll('.projects__card-image[data-lightbox]').forEach(imageContainer => {
  function openLightbox() {
    const img = imageContainer.querySelector('img');
    if (!img) return;
    const lightboxImg = document.getElementById('lightboxImage');
    if (lightboxImg) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      openModal('lightboxModal');
    }
  }

  imageContainer.addEventListener('click', openLightbox);
  imageContainer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox();
    }
  });
});


// ==================== RESUME VIEWER ====================

const resumeViewerBtn = document.getElementById('resumeViewerBtn');
let resumeLoaded = false;

if (resumeViewerBtn) {
  resumeViewerBtn.addEventListener('click', () => {
    if (!resumeLoaded) {
      const iframe = document.getElementById('resumeIframe');
      if (iframe) {
        iframe.src = 'assets/documents/resume.html';
        resumeLoaded = true;
      }
    }
    openModal('resumeViewerModal');
  });
}


// ==================== PROJECT MAP (TOUCH SUPPORT) ====================

if ('ontouchstart' in window) {
  document.querySelectorAll('.project-map__dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      // Toggle label visibility on touch
      const label = dot.nextElementSibling;
      if (label && label.classList.contains('project-map__label')) {
        // Hide all other labels first
        document.querySelectorAll('.project-map__label.is-visible').forEach(l => {
          if (l !== label) l.classList.remove('is-visible');
        });
        label.classList.toggle('is-visible');
      }
    });
  });
}
