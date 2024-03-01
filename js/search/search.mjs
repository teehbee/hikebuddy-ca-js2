export function searchPosts(posts, searchTerm) {

  if (!searchTerm|| searchTerm.trim().length === 0) return posts;

  return posts.filter(post => {
    const titleMatches = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const bodyMatches = post.body.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatches || bodyMatches;
  });
}