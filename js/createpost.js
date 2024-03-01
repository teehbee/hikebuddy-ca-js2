import { apiBaseUrl, postsEndpoint, headers, token } from "./api/constants.js"; 

const postMessageForm = document.getElementById("post-message-form");
const messageTitle = document.getElementById("messageTitle");
const messageContent = document.getElementById("messageContent");
const messageTags = document.getElementById("messageTags");
const postSpinner = document.getElementById("spinner-create-post");

function validatePostForm() {
  if (!messageTitle.value.trim() || !messageContent.value.trim()) {
    alert("Both title and content are required. This will be changed lager");
    return false;
  } 
  return true
  }

async function createPost(url, message) {
  if (!validatePostForm()) {
    return;
  }
  try {

    postSpinner.classList.remove("hidden");
    const postMessage = {
      method: "post",
      headers: headers,
      body: JSON.stringify(message),
    };

    const response = await fetch(url, postMessage);

    if(!response.ok) {
      const errorText = await response.text();
      throw new Error(`API call failed with status ${response.status}: ${errorText}`);
    }

    const json = await response.json();

    console.log("json", json);

    location.reload(true);

    return json;
  } catch (error) {
    console.log("error is", error);
  }
}

  postMessageForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (validatePostForm()) {
    const postRequest = {
      title: messageTitle.value,
      body: messageContent.value,
      tags: messageTags.value
    };

    if (messageTags && messageTags.value.trim()) {
      postRequest.tags = messageTags.value.split(",").map(tag => tag.trim());
    }
  
  createPost(apiBaseUrl + postsEndpoint, postRequest);
}
  });
