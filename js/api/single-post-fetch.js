


import { apiBaseUrl, postsEndpoint } from "./constants.js"; 

// Api call for specific post 

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const token = localStorage.getItem("accessToken");

const headers = {
  'Content-Type': "application/json",
  'Authorization': `Bearer ${token}`,
};

export async function getSpecificPost() {
  try {
    const response = await fetch(`${apiBaseUrl}${postsEndpoint}${id}`, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error (`HTTP error! status: ${response.status}`);
    }

    const specificPost = await response.json();
    return specificPost;

    


  } catch (error) {
    console.error("Error fetching specific post", error);
  }
}

getSpecificPost();