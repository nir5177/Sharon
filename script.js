/* שורשים — script.js */
(function () {
  'use strict';

  var header    = document.getElementById('site-header');
  var hamburger = document.getElementById('hamburger');
  var drawer    = document.getElementById('nav-drawer');
  var overlay   = document.getElementById('nav-overlay');
  var closeBtn  = document.getElementById('nav-close');

  /* ── Sticky header ── */
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Nav drawer ── */
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
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeNav();
  });
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
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    });
  });

  /* ── Fade-in-up on scroll ── */
  if ('IntersectionObserver' in window) {
    var fadeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in-up').forEach(function (el) {
      fadeObs.observe(el);
    });
  } else {
    document.querySelectorAll('.fade-in-up').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── Animated counters ── */
  function animateCounter(el) {
    var target   = parseInt(el.getAttribute('data-target'), 10);
    var duration = 1800;
    var start    = null;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target).toLocaleString('he-IL');
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString('he-IL');
      }
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    var counterObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number[data-target]').forEach(function (el) {
      counterObs.observe(el);
    });
  }

  /* ── Services tab switching ── */
  var tabBtns = document.querySelectorAll('.tab-btn');
  var panels  = document.querySelectorAll('.service-panel');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tabId = btn.getAttribute('data-tab');
      tabBtns.forEach(function (b) { b.classList.remove('tab-btn--active'); });
      panels.forEach(function (p) { p.classList.remove('service-panel--active'); });
      btn.classList.add('tab-btn--active');
      var panel = document.getElementById('tab-' + tabId);
      if (panel) panel.classList.add('service-panel--active');
    });
  });

  /* ── Team carousel ── */
  var teamCarousel = document.getElementById('team-carousel');
  var teamPrev     = document.getElementById('team-prev');
  var teamNext     = document.getElementById('team-next');
  var teamDotsEl   = document.getElementById('team-dots');

  if (teamCarousel && teamDotsEl) {
    var cards       = teamCarousel.querySelectorAll('.team-card');
    var cardCount   = cards.length;
    var currentCard = 0;
    var teamDots    = [];

    cards.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'כרטיס ' + (i + 1));
      dot.addEventListener('click', function () { goToCard(i); });
      teamDotsEl.appendChild(dot);
      teamDots.push(dot);
    });

    function goToCard(idx) {
      currentCard = ((idx % cardCount) + cardCount) % cardCount;
      var card = cards[currentCard];
      teamCarousel.scrollTo({
        left: card.offsetLeft - teamCarousel.offsetLeft,
        behavior: 'smooth'
      });
      teamDots.forEach(function (d, i) { d.classList.toggle('active', i === currentCard); });
    }

    if (teamPrev) teamPrev.addEventListener('click', function () { goToCard(currentCard - 1); });
    if (teamNext) teamNext.addEventListener('click', function () { goToCard(currentCard + 1); });

    /* Touch swipe */
    var tsX = 0;
    teamCarousel.addEventListener('touchstart', function (e) {
      tsX = e.touches[0].clientX;
    }, { passive: true });
    teamCarousel.addEventListener('touchend', function (e) {
      var dx = tsX - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 40) goToCard(currentCard + (dx > 0 ? 1 : -1));
    }, { passive: true });
  }

  /* ── Testimonials auto-slider ── */
  var slider     = document.getElementById('testimonials-slider');
  var testPrev   = document.getElementById('test-prev');
  var testNext   = document.getElementById('test-next');
  var testDotsEl = document.getElementById('test-dots');

  if (slider && testDotsEl) {
    var slides       = slider.querySelectorAll('.testimonial-slide');
    var slideCount   = slides.length;
    var currentSlide = 0;
    var tDots        = [];
    var autoTimer;

    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'עדות ' + (i + 1));
      dot.addEventListener('click', function () { goToSlide(i); restartTimer(); });
      testDotsEl.appendChild(dot);
      tDots.push(dot);
    });

    function goToSlide(idx) {
      slides[currentSlide].classList.remove('active');
      tDots[currentSlide].classList.remove('active');
      currentSlide = ((idx % slideCount) + slideCount) % slideCount;
      slides[currentSlide].classList.add('active');
      tDots[currentSlide].classList.add('active');
    }

    function startTimer()   { autoTimer = setInterval(function () { goToSlide(currentSlide + 1); }, 5000); }
    function restartTimer() { clearInterval(autoTimer); startTimer(); }

    if (testPrev) testPrev.addEventListener('click', function () { goToSlide(currentSlide - 1); restartTimer(); });
    if (testNext) testNext.addEventListener('click', function () { goToSlide(currentSlide + 1); restartTimer(); });

    startTimer();
  }

  /* ── Contact form ── */
  var form       = document.getElementById('contact-form');
  var submitBtn  = document.getElementById('submit-btn');
  var successMsg = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm()) return;

      var endpoint = (window.SHORESHIM && window.SHORESHIM.formEndpoint) || '';
      var errMsg   = document.getElementById('form-error');

      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-label').hidden  = true;
      submitBtn.querySelector('.btn-loading').hidden = false;
      if (errMsg) errMsg.hidden = true;

      function onSuccess() {
        form.querySelectorAll('.form-field input, .form-field textarea').forEach(function (el) {
          el.value = '';
        });
        submitBtn.hidden  = true;
        successMsg.hidden = false;
        successMsg.focus();
      }

      function onError() {
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-label').hidden  = false;
        submitBtn.querySelector('.btn-loading').hidden = true;
        if (errMsg) { errMsg.hidden = false; errMsg.focus(); }
      }

      if (!endpoint) {
        /* No endpoint configured yet — fail gracefully */
        onError();
        return;
      }

      fetch(endpoint, {
        method:  'POST',
        body:    new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (r) {
        if (r.ok) { onSuccess(); } else { onError(); }
      }).catch(function () { onError(); });
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
