// Observer pour les sections
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target;

      // Ajouter visible à la section
      section.classList.add('visible');

      // Titre h2
      const title = section.querySelector('h2');
      if (title) {
        title.classList.add('visible');
      }

      // SECTION ABOUT
      if (section.id === 'about') {
        const aboutBox = section.querySelector('.about');
        const paragraphs = section.querySelectorAll('.about p');

        if (aboutBox) {
          aboutBox.classList.add('visible');
        }

        paragraphs.forEach((p, index) => {
          setTimeout(() => {
            p.classList.add('visible');
          }, index * 200);
        });
      }

      // CARTES (projets, services, etc.)
      const cards = section.querySelectorAll('.card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 200);
      });

      // Stop observer après animation (évite répétition)
      observer.unobserve(section);
    }
  });
}, {
  threshold: 0.2
});

// Observer toutes les sections
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});