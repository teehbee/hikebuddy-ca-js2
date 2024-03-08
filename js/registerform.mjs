// Form validation

import { registerUser } from "./api/register-fetch.mjs";
import { checkRegUsername } from "./validation/validate-username.mjs";
import { validateEmail } from "./validation/validate-email.mjs";
import { checkLength, checkPasswordConfirm } from "./validation/validate-password.mjs";

import { apiBaseUrl, register } from "./api/constants.mjs";

const registrationForm = document.getElementById("registration-form");

const regUserName = document.getElementById("registration-user-name");
const regUserNameError = document.getElementById("registration-username-error");

const regEmail = document.getElementById("registration-user-email");
const regEmailError = document.getElementById("registration-email-error");

const regPassword = document.getElementById("registration-user-password");
const regPasswordError = document.getElementById("registration-password-error");

const regPasswordConfirm = document.getElementById("registration-user-password-confirm");
const regPasswordConfirmError = document.getElementById("registration-password-confirm-error");


function validateForm(event) {
  event.preventDefault();

  const user = {
    name: regUserName.value,
    email: regEmail.value,
    password: regPassword.value
  };


// Validating username

if (checkRegUsername(regUserName.value)) {
  regUserNameError.classList.add("hidden");
} else {
  regUserNameError.classList.remove("hidden");
}

 // Validating email

 if (validateEmail(regEmail.value) == true) {
  regEmailError.classList.add("hidden");
} else {
  regEmailError.classList.remove("hidden");
}
 // Validating password

 if(checkLength(regPassword.value, 7)) {
  regPasswordError.classList.add("hidden");
 } else {
  regPasswordError.classList.remove("hidden");
 }

 // Validating password confirmation

if (checkPasswordConfirm(regPassword.value, regPasswordConfirm.value)) {
  regPasswordConfirmError.classList.add("hidden");
} else {
  regPasswordConfirmError.classList.remove("hidden");
}


registerUser(apiBaseUrl + register, user);
}

document.addEventListener("click", function(event) {
  if (!registrationForm.contains(event.target)) {
    regUserNameError.classList.add("hidden");
    regEmailError.classList.add("hidden");
    regPasswordError.classList.add("hidden");
    regPasswordConfirmError.classList.add("hidden");
  }
 })

if (registrationForm) {
  registrationForm.addEventListener("submit", validateForm);
} else {
}








