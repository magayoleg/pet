import { closeForm } from '../index';

export const postCreateOrUpdate = (id?: string): void => {
  const form: HTMLFormElement | null = id
    ? document.querySelector('#postUpdate')
    : document.querySelector('#postCreate');
  if (form) {
    form.dataset.openclose = 'open';
  } else {
    return;
  }

  if (!id) {
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = String(localStorage.length + 1);
      const formData = new FormData(form);
      const values = Object.fromEntries(formData);
      const postData = {
        ...values,
        createDate: new Date().toLocaleString(),
        id,
      };
      localStorage.setItem(id, JSON.stringify(postData));
      form.dataset.openclose = 'close';
    });
  }

  if (id) {
    const formTitle = form?.querySelector('.formTitle') as HTMLDivElement;
    formTitle.innerText = `Update Post ${id}`;
    const post = JSON.parse(localStorage.getItem(id) ?? '');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const values = Object.fromEntries(formData);
      const postData = {
        ...values,
        updateDate: new Date().toLocaleString(),
        id,
        createDate: post.createDate
      };
      localStorage.setItem(id, JSON.stringify(postData));
      form.dataset.openclose = 'close';
    });
  }

  closeForm(form);
};
