document.addEventListener("DOMContentLoaded", function () {
  let currentHero = 0;
  const heroImages = document.querySelectorAll('.hero-slideshow img');

  setInterval(() => {
    heroImages[currentHero].classList.remove('active');
    currentHero = (currentHero + 1) % heroImages.length;
    heroImages[currentHero].classList.add('active');
  }, 4000);
});

var toggle = document.getElementById('menu-toggle');
var navMenu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navMenu.classList.toggle('hidden');
  });

  let clickCount = 0;

  const h2 = document.querySelector('.hero-content h2');

  h2.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 3) {
      clickCount = 0; // reset after 3 clicks
      launchFallingLogos();
    }
  });

  function launchFallingLogos() {
    const container = document.getElementById('falling-logos-container');
    for (let i = 0; i < 10; i++) {
      const logo = document.createElement('img');
      logo.src = 'images/logo.png'; // update this path if needed
      logo.className = 'falling-logo';
      logo.style.left = Math.random() * 90 + '%';
      logo.style.animationDelay = (Math.random() * 1.5) + 's';
      container.appendChild(logo);

      setTimeout(() => {
        logo.remove();
      }, 4000);
    }
  }

