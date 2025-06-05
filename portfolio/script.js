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

  let currentFlip = 0;
  const flipCarousel = document.getElementById("flipCarousel");
  const totalFlipPages = flipCarousel.children.length;

  function flipMove(dir) {
    currentFlip = (currentFlip + dir + totalFlipPages) % totalFlipPages;
    flipCarousel.style.transform = `translateX(-${currentFlip * 100}%)`;
  }


