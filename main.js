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

// Card expand
document.querySelectorAll('.card__expand-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const card = btn.closest('.card');
    const expanding = !card.classList.contains('is-expanded');
    document.querySelectorAll('.card.is-expanded').forEach(c => c.classList.remove('is-expanded'));
    if (expanding) {
      card.classList.add('is-expanded');
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
      if (!show) card.classList.remove("is-expanded");
    });
  });
});