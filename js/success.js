// registerName

const userNameHeader = document.getElementById("success-username");

const userName = localStorage.getItem("registerName");

userNameHeader.innerHTML = "Awesome" + " " + userName + "!";

