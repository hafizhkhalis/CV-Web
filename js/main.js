// Create collapse effect when use mobile view
const collapsible = document.querySelectorAll('.collapsible');
collapsible.forEach(item => {
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  });
});

// Get modal property
const modal = document.querySelectorAll('.modal');
const overlay = document.querySelectorAll('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

// Function to open the modal view
const openModal = function (i) {
  modal[i].classList.remove('hidden');
  overlay[i].classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

// Function to close the modal view
const closeModal = function (i) {
  modal[i].classList.add('hidden');
  overlay[i].classList.add('hidden');
  document.body.style.overflow = 'visible';
};

// Get number of modal node
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', () => openModal(i));

  btnCloseModal[i].addEventListener('click', () => closeModal(i));

  overlay[i].addEventListener('click', () => closeModal(i));

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal[i].classList.contains('hidden'))
      closeModal(i);
  });
}
