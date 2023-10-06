import { createButton, postCreateOrUpdate } from './index';

const main = document.querySelector('main');
export const createPanel = (): void => {
  const container = document.createElement('div');
  container.className = 'actions';
  container.id = 'actions';
  const postCreateButton = createButton(postCreateOrUpdate);
  container.appendChild(postCreateButton);
  const postListContainer = document.querySelector('#postList');
  main?.insertBefore(container, postListContainer);
};
createPanel();
