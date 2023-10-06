import { closeForm } from '../index';

export const postDelete = (id?: string): void => {
  const form: HTMLFormElement | null = document.querySelector('#postDelete');
  if (form && id) {
    form.dataset.openclose = 'open';
  } else {
    return;
  }
  const formTitle = form?.querySelector('.formTitle') as HTMLDivElement;
  formTitle.innerText = `Delete Post ${id}`;
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.removeItem(id);
    form.dataset.openclose = 'close';
  });

  closeForm(form);
};
