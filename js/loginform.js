import { apiBaseUrl, login } from "./api/constants.js";

const loginForm = document.getElementById("login-form");

const loginEmail = document.getElementById("login-user-email");
const loginPassword = document.getElementById("login-user-password");

const loginError = document.getElementById("login-error");


async function loginUser(url, data) {
  try {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch (url, postData);

    if(!response.ok) {
      loginError.classList.remove("hidden");
      throw new Error("HTTP error" + response.status);
    }

    const json = await response.json();

    const accessToken = json.accessToken;

    localStorage.setItem(`accessToken`, accessToken);

    console.log(json);

    window.location.href = "/profile/index.html";

    return json;
  } catch (error) {
    console.log("error is", error);
  }
}

function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally
 
  const userLogin = {
     email: loginEmail.value,
     password: loginPassword.value
  };
 
  loginUser(apiBaseUrl + login, userLogin);
 }


if (loginForm) {
  loginForm.addEventListener("submit", handleSubmit);
} else {
  console.error("login is incomplete");
}