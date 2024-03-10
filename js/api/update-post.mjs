import { apiBaseUrl, postsEndpoint, headers } from "./constants.mjs";

export async function updatePost(postId, postData) {
  try {
    const response = await fetch(`${apiBaseUrl}${postsEndpoint}${postId}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(postData)
    });
    return await response.json();
  } catch (error) {
  }
}