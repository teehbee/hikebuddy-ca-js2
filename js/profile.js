const userPostContainer = document.querySelector("#userPosts");

import { getUserPosts } from "./api/profile-posts-fetch.js"

// Function showing posts from the specific user

async function userPosts() {
  try {
    const userPost = await getUserPosts();

    console.log(userPost); 

    userPost.forEach(post => {
    
    userPostContainer.innerHTML +=
    `<div class="col-10 col-lg-5 bg-light m-lg-3 mt-4 min-height-150-px">
    <div class="row">
      <div class="col-3 pt-4">
      <picture>
      <source media="(min-width: 992px)" srcset="../assets/logo/profile-image-large.png">
      <img src="../assets/logo/profile-image-small.png" alt="Logo of original poster">
      </picture>
      <p class="post-body text-custom-green font-fm-mulish fs-0-625rem-lg-0-875rem pt-3">Post created: ${new Date(post.created).toLocaleDateString()}</p>
      <div>
      <i id="editPost" class="fa-solid fa-pen-to-square text-custom-green fs-5 pe-3 pb-3"></i>
      <i id="deletePost" class="fa-regular fa-trash-can text-custom-green fs-5"></i>
      </div>
      </div>
      <div class="col-9">
        <h5 class="text-custom-green font-fm-mulish fs-6 fs-0-75rem-lg-1rem fw-bold pt-3 m-0">${post.title}</h5>
        <p class="text-custom-green font-fm-mulish fs-0-625rem-lg-0-875rem pt-1">${post.body}</p>
      </div>
    </div>
  </div>`;
  });
  } catch (error) {
    console.log(error);
  }};

userPosts();