/* שורשים — config.js  (edit via /admin/) */
var SHORESHIM = {
  phone:        "055-0000000",
  whatsapp:     "972500000000",
  email:        "contact@shoreshim.org.il",
  formEndpoint: "",
  youtubeUrl:   "",
  stats: {
    families:    320,
    workshops:   48,
    facilitators: 12,
    cities:       8
  }
};

(function (cfg) {
  var p = document.getElementById('cfg-phone');
  if (p) p.textContent = cfg.phone;

  var em = document.getElementById('cfg-email');
  if (em) em.textContent = cfg.email;

  ['cfg-stat-families','cfg-stat-workshops','cfg-stat-facilitators','cfg-stat-cities'].forEach(function (id, i) {
    var vals = [cfg.stats.families, cfg.stats.workshops, cfg.stats.facilitators, cfg.stats.cities];
    var el = document.getElementById(id);
    if (el) el.setAttribute('data-target', vals[i]);
  });

  var waMsg = encodeURIComponent('שלום, הגעתי מאתר שורשים ואשמח לפרטים בדיסקרטיות');
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (a) {
    var hasText = a.getAttribute('href').indexOf('?text=') !== -1;
    a.href = 'https://wa.me/' + cfg.whatsapp + (hasText ? '?text=' + waMsg : '');
  });

  var ytLink = document.getElementById('hero-video-link');
  if (ytLink) {
    if (cfg.youtubeUrl) {
      ytLink.href = cfg.youtubeUrl;
      ytLink.style.pointerEvents = '';
    } else {
      ytLink.style.pointerEvents = 'none';
      ytLink.removeAttribute('href');
    }
  }
}(SHORESHIM));
