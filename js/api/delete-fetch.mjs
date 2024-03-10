import { apiBaseUrl, postsEndpoint, headers } from "./constants.mjs";

export async function handleDeletePost(event) {
  event.preventDefault();
  const postId = event.target.dataset.id;
  const response = await fetch(`${apiBaseUrl}${postsEndpoint}${postId}`,{
    method: "DELETE",
    headers: headers, 
  });

  if (response.ok) {
    event.target.closest(".bg-light").remove();
  } else {
    alert(`Error deleting post: ${response.status}`);
  }
}