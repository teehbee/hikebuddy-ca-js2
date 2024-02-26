import { loginUser } from "./api/login-fetch.js";
import { apiBaseUrl, login } from "./api/constants.js";

const loginForm = document.getElementById("login-form");

const loginEmail = document.getElementById("login-user-email");
const loginPassword = document.getElementById("login-user-password");

const loginError = document.getElementById("login-error");

function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally
 
  const userLogin = {
     email: loginEmail.value,
     password: loginPassword.value
  };
 
  loginUser(apiBaseUrl + login, userLogin);
 }

 document.addEventListener("click", function(event) {
  if (!loginForm.contains(event.target)) {
    loginError.classList.add("hidden");
  }
 })

if (loginForm) {
  loginForm.addEventListener("submit", handleSubmit);
  
} else {
  console.error("login is incomplete");
}
