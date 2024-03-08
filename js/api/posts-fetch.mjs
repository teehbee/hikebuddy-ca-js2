import { headers } from "./constants.mjs";

export async function fetchPosts(url, sortOrder = "desc", includeAuthor = true) {
  try {
    const getData = {
      method: "GET",
      headers: headers,
    };

    const urlWithSortOrderAndAuthor = `${url}?sortOrder=${sortOrder}&_author=${includeAuthor}`;

    const response = await fetch(urlWithSortOrderAndAuthor, getData);

    const posts = await response.json();

    return posts;

  } catch (error) {
  }
}