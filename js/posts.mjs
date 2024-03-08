import { apiBaseUrl, postsEndpoint } from "./api/constants.mjs"; 
import { fetchPosts } from "./api/posts-fetch.mjs";
import { searchPosts } from "./search/search.mjs";
import { extractUniqueTags } from "./tags/tags.mjs";

const postContainerFeed = document.querySelector(".feed-container");
const loadMoreLink = document.querySelector(".load-more");
const sortOrderSelect = document.querySelector("#sortOrderSelect");
const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector("#search-form");
const spinner = document.querySelector("#spinner-feed");
const tagSelect = document.querySelector("#filter-from-tags");

let currentIndex = 10;
let allPosts = [];

// Function displaying posts on the feed page with search and filtering included

async function displayPosts(posts, searchTerm, selectedTag) {

  spinner.classList.add("d-none");
  postContainerFeed.innerHTML = "";

  let filteredPosts = searchPosts(posts, searchTerm)

  if (selectedTag) {
    filteredPosts = filteredPosts.filter(post => post.tags && post.tags.includes(selectedTag)
    )
  }

  filteredPosts.slice(0, currentIndex).forEach(post =>{      
    
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
                <p class="post-body text-green-lg-white font-fm-mulish fs-0-625rem-lg-0-875rem pt-3 mb-2">${post.author.name}</p>
                <p class="post-body text-green-lg-white font-fm-mulish fs-0-625rem-lg-0-875rem">Posted: ${new Date(post.created).toLocaleDateString()}</p>
          </div>
          <div class="post-title-and-text-container col-9 ">
            <h4 class="post-title text-green-lg-white font-fm-mulish fs-6 fs-0-75rem-lg-1rem fw-bold pt-4 m-0">${post.title}</h4>
            <p class="post-body text-green-lg-white font-fm-mulish fs-0-75rem-lg-1rem pt-1">${post.body}</p>
          </div>
        </div>
        </a>
      </div>
  `;
});

// Removing the load more button if there are no more posts

if (filteredPosts.length < currentIndex) {
  loadMoreLink.style.display = "none";
 }
}

// Loading the initial posts upon entering the site

async function loadInitialPosts() {
  try {
    allPosts = await fetchPosts(apiBaseUrl + postsEndpoint, "desc");
    const selectedTag = tagSelect.value;
    displayPosts(allPosts, searchInput.value,);

    // Extracting unique tags from posts and appending them to select

    const tagsFromPosts = extractUniqueTags(allPosts);

    tagsFromPosts.forEach(tag => {
      const option = document.createElement("option");
      option.value = tag;
      option.textContent = tag;
      tagSelect.appendChild(option);
    });

  }catch (error) {
  }
}

loadInitialPosts();

// Functionality on the load more button loading 10 more posts when clicked

loadMoreLink.addEventListener("click", async (event) => {
  event.preventDefault();
  currentIndex += 10;
  try {
    const posts = await fetchPosts(apiBaseUrl + postsEndpoint, "desc");
    displayPosts(posts);
  } catch (error) {
  }
});

// Eventlistener for sorting functionality

sortOrderSelect.addEventListener("click", async (event) => {
  const selectedSortOrder = event.target.value;
  try {
    const posts = await fetchPosts(apiBaseUrl + postsEndpoint, selectedSortOrder);
    displayPosts(posts);
  } catch (error) {
  }
});

// Eventlistener for search field

searchInput.addEventListener("input", (event) => {
  const filteredPosts = searchPosts(allPosts, event.target.value);
  displayPosts(filteredPosts, event.target.value);
});

searchForm.addEventListener("submit", function(e) {
  e.preventDefault();
}, false);

// Eventlistener for filtering by tag

tagSelect.addEventListener("change", (event) => {
  const selectedTag = event.target.value;
  if (selectedTag === "all-posts") {
    displayPosts(allPosts, searchInput.value);
  } else {
  displayPosts(allPosts, searchInput.value, selectedTag);
}
});

