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

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((f) => f.classList.remove("is-active"));
    btn.classList.add("is-active");

    const cat = btn.dataset.filter;
    cards.forEach((card) => {
      const show = cat === "all" || card.dataset.cat === cat;
      card.classList.toggle("is-hidden", !show);
    });
  });
});