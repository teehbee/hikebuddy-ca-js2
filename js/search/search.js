/**
 * This will let the user search among the posts from the api
 * @param {Object[]} posts An array of post objects each containing a "title" and "body" property.
 * @param {string} searchTerm The search term which will be matched against the title and body of the posts. 
 * @returns {Object[]} An array of objects matching the search term, or the original array if left empty. 
 * @example 
 * ```js
 * // Use this function to let users search among the posts in the api.
 * const posts = [
 * { title: "post 1", body: "This is the first post in the api."},
 * { title: "post 2", body: "This is the second post in the api."},
 * ];
 * const searchTerm = "second";
 * const filteredPosts = searchPosts(posts, searchTerm);
 * console.log(filteredPosts); 
 * // Output: [{ title: "post 2", body: "This is the second post in the api." }]
 * ```
 */

export function searchPosts(posts, searchTerm) {

  if (!searchTerm|| searchTerm.trim().length === 0) return posts;

  return posts.filter(post => {
    const titleMatches = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const bodyMatches = post.body.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatches || bodyMatches;
  });
}
