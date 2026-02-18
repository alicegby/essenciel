// MENU BURGER
const burger = document.querySelector('.burger');
const navUl = document.querySelector('.nav-links ul');

burger.addEventListener('click', () => {
  navUl.classList.toggle('show');
  burger.classList.toggle('toggle');
});

// Retirer index.html
if (window.location.pathname.endsWith("index.html")) {
  window.location.replace(window.location.pathname.replace("index.html", ""));
}