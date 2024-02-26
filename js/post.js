const singlePostContainer = document.querySelector("#specific-post-content");


import { getSpecificPost } from "./api/single-post-fetch.js";

async function singlePost() {
  try {
    const specificPost = await getSpecificPost();

    console.log(specificPost);

    singlePostContainer.innerHTML = `
    <div id="specific-post-content" class="mt-5">
    <h1 class="text-frontpage font-fm-mulish border-bottom border-warning w-75 m-auto fs-1-5-rem pt-3 pb-2">${specificPost.title}</h1>
    <p class="text-frontpage font-fm-mulish fs-0-75rem-lg-1rem pt-3">${specificPost.body}</p>
    <p class="text-frontpage font-fm-mulish fs-0-75rem-lg-1rem pt-3">Author</p>
    <p class="text-frontpage font-fm-mulish fs-0-75rem-lg-1rem pt-3">${new Date(specificPost.created).toLocaleDateString()}</p>
    </div>
    `;
  } catch (error) {
    console.log(error);
  }};

  singlePost();

