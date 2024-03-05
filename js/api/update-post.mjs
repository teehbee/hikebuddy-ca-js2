import { apiBaseUrl, postsEndpoint, headers } from "./constants.mjs";

export async function updatePost(postId, postData) {
  try {
    const response = await fetch(`${apiBaseUrl}${postsEndpoint}${postId}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating post", error);
    throw error;
  }
}