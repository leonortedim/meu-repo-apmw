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


  function openModal(el) {
    const img = el.querySelector('img');
    const modal = document.getElementById('popupModal');
    const popupImg = document.getElementById('popupImage');
    const popupDesc = document.getElementById('popupDescription');

    popupImg.src = img.src;
    popupDesc.textContent = img.dataset.description || 'No description.';
    modal.classList.remove('hidden');
  }

  function closeModal() {
    document.getElementById('popupModal').classList.add('hidden');
  }

  // Optional: Close modal on outside click
  document.getElementById('popupModal').addEventListener('click', (e) => {
    if (e.target.id === 'popupModal') {
      closeModal();
    }
  });


