/* URL's and endpoints */ 

export const apiBaseUrl = "https://api.noroff.dev";

export const postsEndpoint = "/api/v1/social/posts/";

export const login = "/api/v1/social/auth/login";

export const register = "/api/v1/social/auth/register/";

export const profileEndpoint = "/api/v1/social/profiles/";

export const posts = "/posts";

export const token = localStorage.getItem("accessToken");

export const headers = {
  'Content-Type': "application/json",
  'Authorization': `Bearer ${token}`,
};