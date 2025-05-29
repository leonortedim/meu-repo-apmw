const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => {
      c.classList.remove('active');
      c.classList.add('inactive');
    });
    card.classList.add('active');
    card.classList.remove('inactive');
  });
});


