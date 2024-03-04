const singlePostContainer = document.querySelector("#specific-post-content");

import { getSpecificPost } from "./api/single-post-fetch.mjs";

async function singlePost() {
  try {
    const specificPost = await getSpecificPost();

    console.log(specificPost);

    singlePostContainer.innerHTML = `
    <div id="specific-post-content" class="mt-5 pb-5">
    <h1 class="text-frontpage font-fm-mulish border-bottom border-warning w-75 m-auto fs-1-5-rem pt-3 pb-2">${specificPost.title}</h1>
    <p class="text-frontpage font-fm-mulish fs-0-75rem-lg-1rem pt-4 w-75 m-auto">${specificPost.body}</p>
    <p class="text-frontpage font-fm-mulish fs-0-75rem-lg-1rem pt-5">Posted by: ${specificPost.author.name}</p>
    <p class="text-frontpage font-fm-mulish fs-0-75rem-lg-1rem pt-1">Date posted: ${new Date(specificPost.created).toLocaleDateString()}</p>
    </div>
    `;
  } catch (error) {
    console.log(error);
  }};

  singlePost();

