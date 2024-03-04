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