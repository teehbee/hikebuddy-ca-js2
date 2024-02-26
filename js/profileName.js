

const profileNameHeader = document.getElementById("profile-name");
const usersFollowersNameHeader = document.getElementById("users-followers-name-header");

const profileUserName = localStorage.getItem("userName");

profileNameHeader.innerHTML = profileUserName;

usersFollowersNameHeader.innerHTML = profileUserName + "'s Hikebuddies";


