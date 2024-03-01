import { createPost } from "./api/post-creation.mjs";
import { apiBaseUrl, postsEndpoint, headers } from "./api/constants.js"; 
import { validatePostForm } from "./validation/validate-post-form.mjs";

const postMessageForm = document.getElementById("post-message-form");
const messageTitle = document.getElementById("messageTitle");
const messageContent = document.getElementById("messageContent");
const messageTags = document.getElementById("messageTags");


  postMessageForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (validatePostForm()) {
    const postRequest = {
      title: messageTitle.value,
      body: messageContent.value,
    };

    if (messageTags && messageTags.value.trim()) {
      postRequest.tags = messageTags.value.split(",").map(tag => tag.trim());
    }
  
  createPost(apiBaseUrl + postsEndpoint, postRequest);
  }
});
