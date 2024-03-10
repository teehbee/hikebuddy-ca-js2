import { apiBaseUrl, profileEndpoint, posts, headers } from "./constants.mjs"; 

const userName = localStorage.getItem("userName");

export async function getUserPosts() {
  try {
    const response = await fetch(`${apiBaseUrl}${profileEndpoint}${userName}${posts}`, {
      method: "GET",
      headers: headers,
    });

    const userPosts = await response.json();
    return userPosts;
} catch (error) {
  }
}

getUserPosts();