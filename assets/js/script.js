// LOADER + ANIMATION
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const logo = document.getElementById('loader-logo');

  // Crée l'effet "soleil"
  const explode = document.createElement('div');
  explode.classList.add('loader-explode');
  explode.style.left = `calc(50% - 50px)`; // centre horizontal
  explode.style.top = `calc(50% - 50px)`;  // centre vertical
  loader.appendChild(explode);

  // Supprime le logo et le loader après l'explosion
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';

      // ===== ANIMATIONS PRINCIPALES =====
      const images = document.querySelectorAll('.animate-img, .animate-img-left');
      const buttons = document.querySelectorAll('.animate-btn');

      // Animation images
      images.forEach((img, index) => {
        setTimeout(() => {
          img.classList.add('animate-active');
        }, 300 * index);
      });

      // Animation boutons (après les images)
      buttons.forEach((btn, index) => {
        setTimeout(() => {
          btn.classList.add('animate-btn-active');
        }, 800 + (200 * index));
      });

    }, 500); // délai pour que le fade du loader soit fini
  }, 2000); // durée de l'explosion
});
