const apiBaseUrl = "https://api.noroff.dev";
const postsEndpoint = "/api/v1/social/posts";

const postContainerFeed = document.querySelector(".feed-container");
const loadMoreLink = document.querySelector(".load-more");

let currentIndex = 10;

async function fetchPosts(url) {
  try {
    const token = localStorage.getItem(`accessToken`);
    const getData = {
      method: `GET`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);
    console.log(response);
    const posts = await response.json();


    console.log(posts);

    posts.slice(0, currentIndex).forEach(post =>{      
    

    postContainerFeed.innerHTML += 
    `
  <div class="col-10 col-lg-5 bg-light m-lg-3 mt-4 min-height-150-px">
        <div class="post-container row bg-login-body-green-white min-height-150-px">
          <div class="col-3 pt-4">
            <a href="../profile/index.html">
              <picture>
                <source media="(min-width: 992px)" srcset="../assets/img/profile-post-large.png">
                <img src="../assets/img/profile-post-small.png" alt="Logo of original poster">
                </picture></a>
          </div>
          <div class="post-title-and-text-container col-9">
            <h5 class="post-title text-green-lg-white font-fm-mulish fs-6  fs-0-75rem-lg-1rem fw-bold pt-3 m-0 ">${post.title}</h5>
            <p class="post-body text-green-lg-white font-fm-mulish fs-0-625rem-lg-0-875rem pt-1">${post.body}</p>
          </div>
        </div>
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

loadMoreLink.addEventListener("click", (event) => {
  event.preventDefault();
  currentIndex += 10;
  fetchPosts(apiBaseUrl + postsEndpoint);
});

fetchPosts(apiBaseUrl + postsEndpoint);


