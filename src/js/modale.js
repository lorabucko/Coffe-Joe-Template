(() => {
  const refs = {
    openModalBtn: document.querySelector('.subscribe-form-button'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeModalButton: document.querySelector('.modal-btn'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', event => {
    const input = document.querySelector('.subscribe-form-input');
    event.preventDefault();

    if (!input.checkValidity()) {
      alert('Помилка: Поле Email заповнене не вірно!');
    } else {
      toggleModal();
      console.log(`Email користувача - ${input.value}`);
    }
    input.value = '';
  });

  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalButton.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('subscription-open');
  }
})();
