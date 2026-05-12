/* שורשים — script.js */
(function () {
  'use strict';

  var header    = document.getElementById('site-header');
  var hamburger = document.getElementById('hamburger');
  var drawer    = document.getElementById('nav-drawer');
  var overlay   = document.getElementById('nav-overlay');
  var closeBtn  = document.getElementById('nav-close');
  var backToTop = document.getElementById('back-to-top');

  /* ── Sticky header ── */
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 20);
    if (backToTop) backToTop.hidden = window.scrollY < 400;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Nav drawer open/close ── */
  function openNav() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    drawer.removeAttribute('aria-hidden');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeNav() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  hamburger.addEventListener('click', openNav);
  closeBtn.addEventListener('click', closeNav);
  overlay.addEventListener('click', closeNav);

  /* Close on Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeNav();
  });

  /* Close on nav link click */
  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  /* ── Smooth scroll for in-page anchors ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = anchor.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = (header ? header.offsetHeight : 0) + 8;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });

  /* ── Filter chips toggle ── */
  document.querySelectorAll('.chip').forEach(function (chip) {
    chip.addEventListener('click', function (e) {
      if (chip.tagName === 'A') return; // let links through
      chip.classList.toggle('active');
    });
  });

  /* ── Contact form ── */
  var form       = document.getElementById('contact-form');
  var submitBtn  = document.getElementById('submit-btn');
  var successMsg = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm()) return;

      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-label').hidden  = true;
      submitBtn.querySelector('.btn-loading').hidden = false;

      setTimeout(function () {
        form.querySelectorAll('.form-field input, .form-field textarea').forEach(function (el) { el.value = ''; });
        submitBtn.hidden   = true;
        successMsg.hidden  = false;
        successMsg.focus();
      }, 900);
    });

    form.querySelectorAll('input[required]').forEach(function (field) {
      field.addEventListener('blur', function () { validateField(field); });
      field.addEventListener('input', function () { clearError(field); });
    });
  }

  function validateForm() {
    var ok = true;
    ['f-name', 'f-phone'].forEach(function (id) {
      var f = document.getElementById(id);
      if (f && !f.value.trim()) { showError(f, 'שדה חובה'); ok = false; }
    });
    var phone = document.getElementById('f-phone');
    if (phone && phone.value.trim() && !/^[\d\s\-+()]{7,}$/.test(phone.value)) {
      showError(phone, 'מספר טלפון לא תקין'); ok = false;
    }
    return ok;
  }

  function validateField(field) {
    if (!field.value.trim()) showError(field, 'שדה חובה');
  }

  function showError(field, msg) {
    field.closest('.form-field').classList.add('invalid');
    var err = field.closest('.form-field').querySelector('.field-error');
    if (err) err.textContent = msg;
  }

  function clearError(field) {
    field.closest('.form-field').classList.remove('invalid');
    var err = field.closest('.form-field').querySelector('.field-error');
    if (err) err.textContent = '';
  }
})();
