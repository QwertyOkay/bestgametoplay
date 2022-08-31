(() => {
    const refs = {
      openModalBtn6: document.querySelector('[data-modal-open6]'),
      closeModalBtn6: document.querySelector('[data-modal-close6]'),

      modal6: document.querySelector('[data-modal6]'),
      };
  
    refs.openModalBtn6.addEventListener('click', toggleModal6);
    refs.closeModalBtn6.addEventListener('click', toggleModal6);
      
    function toggleModal6() {
    refs.modal6.classList.toggle('is-hidden6');
    }
    
    })();
