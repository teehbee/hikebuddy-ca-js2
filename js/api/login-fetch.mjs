
const loginError = document.getElementById("login-error");
const loginSpinner = document.getElementById("spinner-login");

export async function loginUser(url, data) {
  try {

    loginSpinner.classList.remove("hidden");
    
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
      loginSpinner.classList.add("hidden");
      throw new Error("HTTP error" + response.status);
    }

    const json = await response.json();

    const accessToken = json.accessToken;
    const userName =json.name;

    localStorage.setItem(`accessToken`, accessToken);
    localStorage.setItem(`userName`, userName)

    window.location.href = "/profile/index.html";

    loginSpinner.classList.add("hidden");

    return json;
  } catch (error) {
  }
}