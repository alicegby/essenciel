const burger = document.querySelector('.burger');
const navMenu = document.getElementById('nav-menu');
const navUl = navMenu.querySelector('ul');

burger.addEventListener('click', () => {
  navUl.classList.toggle('show');

  // animation du burger (optionnel)
  burger.classList.toggle('toggle');
});