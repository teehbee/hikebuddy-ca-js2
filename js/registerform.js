// Form validation
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

// Function checking length of input

function checkLength(value, len) {
  if(value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// Function checking email address


function validateEmail(regEmail) {
  const regEx = /^[a-zA-Z0-9._%+-]+@(noroff\.no|stud\.noroff\.no)$/;
  const patternMatches = regEx.test(regEmail);
  return patternMatches;
}

// Function making sure that the username only contains alphanumerics and underscores. 

function checkRegUsername(value) {
  const regExt = /^[a-zA-Z0-9_]*$/;
  return value.trim().length > 0 && regExt.test(value);
}

// Function checking the confirmed password 

function checkPasswordConfirm(password, confirmPassword) {
  return password === confirmPassword;
}

}

registrationForm.addEventListener("submit", validateForm);

