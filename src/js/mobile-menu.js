(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    menulink: document.querySelector('.nav-list-mobile'),
  };

  if (!refs.openMenuBtn || !refs.closeMenuBtn || !refs.menu || !refs.menulink) {
    return;
  }

  refs.menulink.addEventListener('click', event => {
    if (event.target.classList.contains('header-list-link')) {
      toggleModal();
    }
  });

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();