/* שורשים — content.js  (edit via /admin/) */
var SHORESHIM_CONTENT = {"hero.title":"העוצמה, הידע והכח","hero.accent":"להורים המתמודדים","hero.subtitle":"המקום בו תמצאו את כל ההדרכה המקצועית, התמיכה וההבנה — באהבה ובלי שיפוטיות, בדיסקרטיות מוחלטת.","about.body":"ארגון שורשים, מבית עמותת התקשרות, מספק תמיכה, ידע וכלים מעשיים להורים חרדים המתמודדים עם פערים השקפתיים ונתק מול ילדיהם. אנחנו מאמינים שהקשר בין הורים לילדיהם קדוש ובלתי ניתן לניתוק — גם כשהדרכים נפרדות.","testimonials":[{"quote":"אני לא יודע איך הייתי אוסף כוחות לולא הקהילה המדהימה הזו!","body":"תודה על כל הסדנאות ועל הקהילה המדהימה. על הליווי המקצועי ועל כל הידע והתמיכה! בלי המעטפת שלכם אני לא יודע מאיפה הייתי אוסף את הכוחות להתמודד הלאה.","author":"יוסף","role":"הורה מתמודד"},{"quote":"המעקב אחר התכנים של שורשים הפך לי את החיים!","body":"אין לך מושג איך רק ההדרכה שלכם הפכה לי את החיים לגמרי. ובאיזה מקום מדהים אני נמצאת עם הבת המתמודדת שלנו היום, בזכות שורשים. תודה!","author":"יוכי","role":"הורה מתמודד"},{"quote":"הכנס הנפלא נתן לי הרבה כוחות. הרגשתי רוגע שמזמן לא הרגשתי.","body":"רציתי להודות לכם על הסדנה המדהימה שהיתה לפני החגים. היא נתנה לי הרבה כוחות. אחרי הסדנה הרגשתי רוגע שמזמן לא הרגשתי. תודה רבה!","author":"טובה","role":"הורה מתמודד"},{"quote":"הלב שלי פצוע ואתם מאפשרים לי לנשום.","body":"בתור אמא לנערה מתמודדת, הלב שלי פצוע, שבור וכואב ברמות קשות. וכל פעם שאני מקבלת ליווי מכם, אני מרגישה שזה מבריא לי קצת את הלב ואני יכולה עוד קצת לנשום.","author":"שרה","role":"הורה מתמודד"}]};

(function (c) {
  function setText(id, val) {
    var el = document.getElementById(id);
    if (el && val != null) el.textContent = String(val);
  }
  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  setText('content-hero-title',    c['hero.title']);
  setText('content-hero-accent',   c['hero.accent']);
  setText('content-hero-subtitle', c['hero.subtitle']);
  setText('content-mission-body',  c['about.body']);

  if (Array.isArray(c.testimonials) && c.testimonials.length) {
    var slider = document.getElementById('testimonials-slider');
    if (slider) {
      slider.innerHTML = c.testimonials.map(function (t, i) {
        return '<div class="testimonial-slide' + (i===0?' active':'') + '">' +
          '<blockquote class="testimonial-quote">"' + esc(t.quote) + '"</blockquote>' +
          '<p class="testimonial-body">' + esc(t.body) + '</p>' +
          '<div class="testimonial-author">' +
          '<div class="testimonial-avatar">' + esc((t.author||'?').charAt(0)) + '</div>' +
          '<div><strong>' + esc(t.author) + '</strong><span>' + esc(t.role) + '</span></div>' +
          '</div></div>';
      }).join('');
    }
  }
}(SHORESHIM_CONTENT));
