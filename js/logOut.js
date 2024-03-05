const logOutIcon = document.getElementById("logOut");

logOutIcon.addEventListener("click", function(event) {
event.preventDefault();
  console.log('Logout clicked');

  localStorage.removeItem("registerName");
  localStorage.removeItem("userName");
  localStorage.removeItem("accessToken");

  window.location.href="../index.html";

});