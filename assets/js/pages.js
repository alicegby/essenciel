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
});

