export const createButton = (
  postCreateOrUpdate: () => void
): HTMLButtonElement => {
  const postCreateButton = document.createElement('button');
  postCreateButton.id = 'postCreateButton';
  postCreateButton.innerText = 'Create New Post';
  postCreateButton?.addEventListener('click', (e) => {
    e.preventDefault();
    postCreateOrUpdate();
  });
  return postCreateButton;
};
