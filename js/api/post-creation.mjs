import { headers } from "./constants.mjs"; 
import { validatePostForm } from "../validation/validate-post-form.mjs";

const postSpinner = document.getElementById("spinner-create-post");

export async function createPost(url, message) {
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
    const json = await response.json();

    location.reload();

    return json;
  } catch (error) {
  }
}