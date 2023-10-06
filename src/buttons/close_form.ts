export const closeForm = (form: HTMLFormElement | null): void => {
  const buttonClose = form?.querySelector('*[data-buttonclose]');
  buttonClose?.addEventListener('click', (e) => {
    e.preventDefault();
    if (form) {
      form.dataset.openclose = 'close';
    }
  });
};
