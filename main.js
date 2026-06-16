// Education year tabs
document.querySelectorAll('.year-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const year = btn.dataset.year;
    const item = btn.closest('.edu-item');
    const content = item.querySelector('.year-content');
    const isActive = btn.classList.contains('is-active');

    item.querySelectorAll('.year-tab').forEach(t => t.classList.remove('is-active'));
    item.querySelectorAll('.year-modules').forEach(m => m.classList.remove('is-active'));

    if (isActive) {
      content.classList.remove('is-visible');
    } else {
      btn.classList.add('is-active');
      item.querySelector(`.year-modules[data-year="${year}"]`).classList.add('is-active');
      content.classList.add('is-visible');
    }
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Project category filtering
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

// Carousels
document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const slides = Array.from(carousel.querySelectorAll('.carousel__slide'));
  const dots = Array.from(carousel.querySelectorAll('.carousel__dot'));
  let current = 0;

  function goTo(n) {
    const prevVideo = slides[current].querySelector('video');
    if (prevVideo) { prevVideo.pause(); prevVideo.currentTime = 0; }
    slides[current].classList.remove('carousel__slide--active');
    dots[current].classList.remove('carousel__dot--active');
    current = ((n % slides.length) + slides.length) % slides.length;
    slides[current].classList.add('carousel__slide--active');
    dots[current].classList.add('carousel__dot--active');
    const nextVideo = slides[current].querySelector('video');
    if (nextVideo) nextVideo.play();
  }

  carousel._reset = () => { if (current !== 0) goTo(0); };

  carousel.querySelector('.carousel__btn--prev').addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
  carousel.querySelector('.carousel__btn--next').addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });
  dots.forEach((dot, i) => dot.addEventListener('click', e => { e.stopPropagation(); goTo(i); }));
});

// Card expand
document.querySelectorAll('.card__expand-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const card = btn.closest('.card');
    const expanding = !card.classList.contains('is-expanded');
    document.querySelectorAll('.card.is-expanded').forEach(c => {
      const cr = c.querySelector('[data-carousel]');
      if (cr && cr._reset) cr._reset();
      c.classList.remove('is-expanded');
      c.style.height = '';
    });
    if (expanding) {
      const h = card.offsetHeight;
      card.classList.add('is-expanded');
      card.style.height = h + 'px';
      requestAnimationFrame(() => card.scrollIntoView({ behavior: 'smooth', block: 'center' }));
    }
  });
});

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((f) => f.classList.remove("is-active"));
    btn.classList.add("is-active");

    const cat = btn.dataset.filter;
    cards.forEach((card) => {
      const show = cat === "all" || card.dataset.cat === cat;
      card.classList.toggle("is-hidden", !show);
      if (!show) { card.classList.remove("is-expanded"); card.style.height = ''; }
    });
  });
});