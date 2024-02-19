import { apiBaseUrl, profileEndpoint, posts } from "./constants.js"; 

const token = localStorage.getItem("accessToken");
const userName = localStorage.getItem("userName");

const headers = {
  'Content-Type': "application/json",
  'Authorization': `Bearer ${token}`,
};

export async function getUserPosts() {
  try {
    const response = await fetch(`${apiBaseUrl}${profileEndpoint}${userName}${posts}`, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error (`HTTP error! status: ${response.status}`);
    }

    const userPosts = await response.json();
    return userPosts;
} catch (error) {
  console.error("Error fetching user posts", error)
  }
}

getUserPosts();