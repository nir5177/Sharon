(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.donation-amounts');
    if (!container) return;

    var buttons      = container.querySelectorAll('button[data-amount]');
    var customBtn    = container.querySelector('button[data-amount="custom"]');
    var customWrap   = document.querySelector('.donation-custom-input');
    var customInput  = customWrap && customWrap.querySelector('input');
    var donateBtn    = document.querySelector('.donate-main-cta');
    var baseUrl      = donateBtn ? donateBtn.getAttribute('href') : '#';

    function setActive(btn) {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
    }

    function updateDonateLink(amount) {
      if (!donateBtn || !amount) return;
      // Append amount as query param — adjust param name to match your provider
      donateBtn.setAttribute('href', baseUrl + '?amount=' + encodeURIComponent(amount));
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var amount = btn.getAttribute('data-amount');

        setActive(btn);

        if (amount === 'custom') {
          if (customWrap) customWrap.classList.add('visible');
          if (customInput) customInput.focus();
        } else {
          if (customWrap) customWrap.classList.remove('visible');
          updateDonateLink(amount);
        }
      });
    });

    if (customInput) {
      customInput.addEventListener('input', function () {
        updateDonateLink(customInput.value);
      });
    }

    // Activate first preset by default
    if (buttons.length > 0 && !customBtn) {
      buttons[0].click();
    } else if (buttons.length > 1) {
      // Click first non-custom button
      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].getAttribute('data-amount') !== 'custom') {
          buttons[i].click();
          break;
        }
      }
    }
  });
})();
