import { postCreateOrUpdate } from '../forms/post_create _or_update';
import { postDelete } from '../forms/post_delete';

export interface Posts {
  createDate: Date;
  description: string;
  id: string;
  title: string;
  updateDate: Date;
}

const postCollection = document.querySelector('#postList');
const postListDisplay = (): void => {
  const posts: Posts[] = Object.entries(localStorage).map(([_, value]) =>
    JSON.parse(value)
  );
  posts.forEach((post) => {
    const container = document.createElement('div');
    container.setAttribute('id', `post_${post.id}`);
    container.className = 'post';
    console.log(post);
    container.innerHTML = `
        <div>
          <div class="postDate">
            <span>Create Date: ${post.createDate ?? '—'}</span>
            <span>Update Date: ${post.updateDate ?? '—'}</span>
          </div>
          <div class="postInfo">
            <div class="postInfo_title">${post.title || 'No Data'}</div>
            <div class="postInfo_description">${
              post.description || 'No Data'
            }</div>
          </div>
        </div>
        <div>
          <button id="deletePostButton">
            Delete post
          </button>
          <button id="editPostButton">
            Edit post
          </button>
        </div>
        `;
    container.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      if (target.id === 'deletePostButton') {
        postDelete(post.id);
      }
      if (target.id === 'editPostButton') {
        postCreateOrUpdate(post.id);
      }
    });
    postCollection?.appendChild(container);
  });
};
postListDisplay();
