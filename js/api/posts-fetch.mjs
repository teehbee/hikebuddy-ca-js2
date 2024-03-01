export async function fetchPosts(url, sortOrder = "desc", includeAuthor = true) {
  try {
    const token = localStorage.getItem("accessToken");
    const getData = {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const urlWithSortOrderAndAuthor = `${url}?sortOrder=${sortOrder}&_author=${includeAuthor}`;

    const response = await fetch(urlWithSortOrderAndAuthor, getData);

    const posts = await response.json();

    console.log(response);

    return posts;

  } catch (error) {
    console.log(error);
    throw error;
  }
}