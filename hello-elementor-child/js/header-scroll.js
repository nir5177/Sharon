(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.site-header');
    if (!header) return;

    var SCROLL_THRESHOLD = 80; // px before header becomes opaque

    function onScroll() {
      if (window.scrollY > SCROLL_THRESHOLD) {
        header.classList.add('scrolled');
        header.classList.remove('transparent');
      } else {
        header.classList.remove('scrolled');
        header.classList.add('transparent');
      }
    }

    // Initialise on load
    header.classList.add('transparent');
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
  });
})();
