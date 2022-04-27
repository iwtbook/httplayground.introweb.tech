// script.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  bindEvents();
}

function bindEvents() {
  const categories = Array.from(document.querySelectorAll('.category'));
  categories.forEach(category => {
    category.addEventListener('click', () => {
      category.classList.toggle('open');
    });
  });
}