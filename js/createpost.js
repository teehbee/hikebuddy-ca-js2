import { apiBaseUrl, postsEndpoint } from "./api/constants.js"; 

const postMessageForm = document.getElementById("post-message-form");
const messageTitle = document.getElementById("messageTitle");
const messageContent = document.getElementById("messageContent");

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

    const token = localStorage.getItem("accessToken");

    const postMessage = {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
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
      body: messageContent.value
    };
  
  createPost(apiBaseUrl + postsEndpoint, postRequest);
}
  });
