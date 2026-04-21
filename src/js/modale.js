(() => {
  const refs = {
    openModalBtn: document.querySelector('.subscribe-form-button'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeModalButton: document.querySelector('.modal-btn'),
    modal: document.querySelector('[data-modal]'),
    input: document.querySelector('.subscribe-form-input'),
  };

  if (!refs.openModalBtn || !refs.modal || !refs.input) {
    return;
  }

  refs.openModalBtn.addEventListener('click', event => {
    event.preventDefault();

    if (!refs.input.checkValidity()) {
      alert('Помилка: Поле Email заповнене не вірно!');
      return;
    }

    toggleModal();
    console.log(`Email користувача - ${refs.input.value}`);
    refs.input.value = '';
  });

  if (refs.closeModalBtn) {
    refs.closeModalBtn.addEventListener('click', toggleModal);
  }

  if (refs.closeModalButton) {
    refs.closeModalButton.addEventListener('click', toggleModal);
  }

  function toggleModal() {
    refs.modal.classList.toggle('subscription-open');
  }
})();