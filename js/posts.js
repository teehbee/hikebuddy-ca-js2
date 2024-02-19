import { apiBaseUrl, postsEndpoint } from "./api/constants.js"; 

const postContainerFeed = document.querySelector(".feed-container");
const loadMoreLink = document.querySelector(".load-more");
const sortOrderSelect = document.querySelector("#sortOrderSelect");
const searchInput = document.querySelector("#searchInput");

let currentIndex = 10;

async function fetchPosts(url, sortOrder = "desc") {
  try {
    const token = localStorage.getItem("accessToken");
    const getData = {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const urlWithSortOrder = `${url}?sortOrder=${sortOrder}`;

    const response = await fetch(urlWithSortOrder, getData);
    console.log(response);
    const posts = await response.json();

    console.log(posts);

    postContainerFeed.innerHTML = "";

    posts.slice(0, currentIndex).forEach(post =>{      
    
    postContainerFeed.innerHTML += 
    `
    
    <div class="col-10 col-lg-5 bg-light m-lg-3 mt-4 min-height-150-px">
    <a class="text-decoration-none" href="./post.html?id=${post.id}">
        <div class="post-container row bg-login-body-green-white min-height-150-px">
          <div class="col-3 pt-4">
              <picture>
                <source media="(min-width: 992px)" srcset="../assets/logo/profile-image-large.png">
                <img src="../assets/logo/profile-image-small.png" alt="Logo of original poster">
                </picture>
                <p class="post-body text-green-lg-white font-fm-mulish fs-0-625rem-lg-0-875rem pt-3">Post created: ${new Date(post.created).toLocaleDateString()}</p>
          </div>
          <div class="post-title-and-text-container col-9 ">
            <h5 class="post-title text-green-lg-white font-fm-mulish fs-6 fs-0-75rem-lg-1rem fw-bold pt-4 m-0">${post.title}</h5>
            <p class="post-body text-green-lg-white font-fm-mulish fs-0-75rem-lg-1rem pt-1">${post.body}</p>
          </div>
        </div>
        </a>
      </div>
  `;
});

   if (posts.length < currentIndex) {
    loadMoreLink.style.display = "none";
   }

  } catch (error) {
    console.log(error);
  }
}

fetchPosts(apiBaseUrl + postsEndpoint, "desc");

loadMoreLink.addEventListener("click", (event) => {
  event.preventDefault();
  currentIndex += 10;
  fetchPosts(apiBaseUrl + postsEndpoint, "desc");
});

sortOrderSelect.addEventListener("change", (event) => {
  const selectedSortOrder = event.target.value;
  fetchPosts(apiBaseUrl + postsEndpoint, selectedSortOrder);
})


