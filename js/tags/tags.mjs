export function extractUniqueTags(posts) {
  const uniqueTags = new Set();

  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => {
        uniqueTags.add(tag);
      });
    }
  });

  return Array.from(uniqueTags);
}