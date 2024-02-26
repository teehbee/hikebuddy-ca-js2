const logOutIcon = document.getElementById("logOut");

logOutIcon.addEventListener("click", function() {

  console.log('Logout clicked');

  localStorage.removeItem("registerName");
  localStorage.removeItem("userName");
  localStorage.removeItem("accessToken");

  window.location.replace("../register.html");

});