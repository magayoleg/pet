import { postDelete } from '../forms/post_delete';

export const postDeleteButton = document.querySelector('#postDeleteButton');
postDeleteButton?.addEventListener('click', (e) => {
  e.preventDefault();
  postDelete();
});
