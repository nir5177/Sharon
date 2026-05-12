/* ============================================================
   שורשים — script.js
   ============================================================ */

(function () {
  'use strict';

  /* ---------- STICKY HEADER ---------- */
  const header = document.getElementById('header');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 24);
    backToTop.hidden = window.scrollY < 400;
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- ACTIVE NAV LINK (IntersectionObserver) ---------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    },
    { rootMargin: '-50% 0px -50% 0px' }
  );

  sections.forEach((s) => observer.observe(s));

  /* ---------- MOBILE HAMBURGER ---------- */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on nav-link click
  navMenu.querySelectorAll('.nav-link, .btn-cta').forEach((el) => {
    el.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* ---------- BACK TO TOP ---------- */
  const backToTop = document.getElementById('back-to-top');
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- DONATION AMOUNT BUTTONS ---------- */
  const amountBtns      = document.querySelectorAll('.donate-amount-btn');
  const customWrap      = document.getElementById('donate-custom-wrap');
  const customInput     = document.getElementById('custom-amount');
  const donateBtnEl     = document.getElementById('donate-btn');

  let selectedAmount = 200; // default

  amountBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      amountBtns.forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');

      if (btn.dataset.amount === 'custom') {
        customWrap.hidden = false;
        customInput.focus();
        selectedAmount = null;
      } else {
        customWrap.hidden = true;
        selectedAmount = parseInt(btn.dataset.amount, 10);
        updateDonateLink(selectedAmount);
      }
    });
  });

  customInput.addEventListener('input', () => {
    const val = parseInt(customInput.value, 10);
    if (!isNaN(val) && val >= 10) {
      selectedAmount = val;
      updateDonateLink(val);
    }
  });

  // Pre-select 200
  const defaultBtn = document.querySelector('[data-amount="200"]');
  if (defaultBtn) defaultBtn.classList.add('selected');

  function updateDonateLink(amount) {
    const base = donateBtnEl.getAttribute('href').split('?')[0];
    donateBtnEl.setAttribute('href', base + '?amount=' + amount);
  }

  /* ---------- CONTACT FORM ---------- */
  const form       = document.getElementById('contact-form');
  const submitBtn  = document.getElementById('submit-btn');
  const successMsg = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      // Disable button, show loading state
      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-text').hidden  = true;
      submitBtn.querySelector('.btn-loading').hidden = false;

      // Simulate async send (replace with real fetch/POST)
      setTimeout(() => {
        form.hidden      = true;
        successMsg.hidden = false;
        successMsg.focus();
      }, 900);
    });

    // Live validation
    form.querySelectorAll('input[required], textarea[required]').forEach((field) => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => clearError(field));
    });
  }

  function validateForm() {
    let valid = true;

    const name    = form.querySelector('#name');
    const phone   = form.querySelector('#phone');
    const privacy = form.querySelector('#privacy');

    if (!name.value.trim()) {
      showError(name, 'נא להזין שם או כינוי');
      valid = false;
    }

    if (!phone.value.trim()) {
      showError(phone, 'נא להזין מספר טלפון');
      valid = false;
    } else if (!/^[\d\s\-+()]{7,}$/.test(phone.value)) {
      showError(phone, 'מספר טלפון לא תקין');
      valid = false;
    }

    if (privacy && !privacy.checked) {
      const errEl = privacy.closest('.form-group').querySelector('.form-error');
      if (errEl) errEl.textContent = 'יש לאשר את הצהרת הפרטיות להמשך';
      valid = false;
    }

    return valid;
  }

  function validateField(field) {
    if (!field.value.trim()) {
      const label = form.querySelector(`label[for="${field.id}"]`);
      const name  = label ? label.textContent.replace('*','').trim() : 'שדה זה';
      showError(field, `נא למלא את "${name}"`);
    }
  }

  function showError(field, msg) {
    field.classList.add('invalid');
    const errEl = field.closest('.form-group').querySelector('.form-error');
    if (errEl) errEl.textContent = msg;
  }

  function clearError(field) {
    field.classList.remove('invalid');
    const errEl = field.closest('.form-group').querySelector('.form-error');
    if (errEl) errEl.textContent = '';
  }

  /* ---------- SMOOTH SCROLL for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = header ? header.offsetHeight + 8 : 0;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- INIT ---------- */
  onScroll();
})();
