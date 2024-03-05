const userPostContainer = document.querySelector("#userPosts");
const spinnerProfile = document.querySelector("#spinner-profile"); 
const closeButton = document.querySelector("#close");

const dialog = document.getElementById("update-post-dialog");

import { getUserPosts } from "./api/profile-posts-fetch.mjs";
import { handleDeletePost } from "./api/delete-fetch.mjs";
import { updatePost } from "./api/update-post.mjs";

// Function showing posts from the specific user

async function userPosts() {
  try {
    const userPost = await getUserPosts();

    console.log(userPost); 

    spinnerProfile.classList.add("d-none");


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
      <a id="editPost" href="" data-id="${post.id}">
      <i class="fa-solid fa-pen-to-square text-custom-green fs-5 pe-3 pb-3"></i></a>
      <a href="" data-id="${post.id}">
      <i class="deletePost fa-regular fa-trash-can text-custom-green fs-5" data-id="${post.id}"></i>
      </div></a>
      </div>
      <div class="col-9">
        <h4 class="text-custom-green font-fm-mulish fs-6 fs-0-75rem-lg-1rem fw-bold pt-3 m-0">${post.title}</h4>
        <p class="text-custom-green font-fm-mulish fs-0-625rem-lg-0-875rem pt-1">${post.body}</p>
      </div>
    </div>
  </div>`;
  });
  attachDeleteEventListener();
  attachEditEventListener(userPost);
  } catch (error) {
    console.log(error);
  }};

userPosts();


// Delete post

async function attachDeleteEventListener() {
document.querySelectorAll(".deletePost").forEach(deleteIcon => {
  deleteIcon.addEventListener("click", handleDeletePost);
});
}

// Load dialog and populate with post content for updating

async function attachEditEventListener(userPost) {
document.querySelectorAll("#editPost").forEach(editLink => {
  editLink.addEventListener("click", (event) => {
    event.preventDefault();
    const postId = event.currentTarget.dataset.id.toString();
    const post = userPost.find(post => post.id.toString() === postId);

    if (post) {
    document.getElementById("post-title-update").value = post.title;
    document.getElementById("post-body-update").value = post.body;
    document.getElementById("update-post-form").dataset.postId = postId;

    dialog.showModal();
  } else {
    console.error("Something goes wrong here: ", postId);
  }
  });
});
}

// Update post 

 document.getElementById("update-post-form").addEventListener("submit", async (event) => {
   event.preventDefault();

   const postId = document.getElementById("update-post-form").dataset.postId;
   const postTitle = document.getElementById("post-title-update").value;
   const postBody = document.getElementById("post-body-update").value;

   

   try {
    const updatedPost = await updatePost(postId, { title: postTitle, body: postBody });
    console.log("Post was updated successfully", updatedPost);

    dialog.close();

    location.reload();
   } catch (error) {
    console.error("Error updating post", error);
   }
 }); 

 // Close dialog by button 

 closeButton.addEventListener("click", () => {
  dialog.close();
 });