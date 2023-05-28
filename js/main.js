const collapsible = document.querySelectorAll('.collapsible');
collapsible.forEach(item => {
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  });
});

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelectorAll('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

let checkOpenedModal = 0;

const openModal = function (i, func) {
  modal[i].classList.remove('hidden');
  overlay[i].classList.remove('hidden');
};

const closeModal = function (i) {
  modal[i].classList.add('hidden');
  overlay[i].classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', () => openModal(i));

  btnCloseModal[i].addEventListener('click', () => closeModal(i));

  overlay[i].addEventListener('click', () => closeModal(i));

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
      closeModal(i);
  });
}
