// MENU BURGER
const burger = document.querySelector('.burger');
const navUl = document.querySelector('.nav-links ul');

burger.addEventListener('click', () => {
  navUl.classList.toggle('show');
  burger.classList.toggle('toggle');
});