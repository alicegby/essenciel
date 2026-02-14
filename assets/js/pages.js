/* MOUVEMENT IMAGES ET BOUTONS */
window.addEventListener('load', () => {
    // Images
    const images = document.querySelectorAll('.animate-img, .animate-img-left');
    images.forEach((img, index) => {
        setTimeout(() => img.classList.add('animate-active'), 300 * index);
    });

    // Boutons
    const buttons = document.querySelectorAll('.animate-btn');
    buttons.forEach((btn, index) => {
        setTimeout(() => btn.classList.add('animate-btn-active'), 800 + (200 * index));
    });

    // Blocs Mes accompagnements
    const blocks = document.querySelectorAll('.animate-block');
    blocks.forEach((block, index) => {
        setTimeout(() => block.classList.add('animate-block-active'), 500 + (300 * index));
    });
});

/* GALERIE D'IMAGES ACCOMPAGNEMENTS */
document.querySelectorAll(".carousel").forEach(carousel => {
  const images = carousel.querySelectorAll("img");
  let index = 0;

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 4000);
});