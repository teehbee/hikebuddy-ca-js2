import { apiBaseUrl, postsEndpoint } from "./api/constants.js"; 

const postMessageForm = document.getElementById("post-message-form");

const messageTitle = document.getElementById("messageTitle");

const messageContent = document.getElementById("messageContent");

async function createPost(url, message) {
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
      throw new Error("HTTP error" + response.status);
    }

    const json = await response.json();

    console.log("json", json);

    return json;
  } catch (error) {
    console.log("error is", error);
  }

  const postRequest = {
    title: messageTitle.value,
    body: messageContent.value
  };

  createPost(apiBaseUrl + postsEndpoint, postRequest)

}

postMessageForm.addEventListener("click", createPost);