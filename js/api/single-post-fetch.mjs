import { apiBaseUrl, postsEndpoint, headers } from "./constants.mjs"; 

// Api call for specific post 

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export async function getSpecificPost() {
  try {
    const response = await fetch(`${apiBaseUrl}${postsEndpoint}${id}?_author=true`, {
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