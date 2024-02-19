
export async function loginUser(url, data) {
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
    const userName =json.name;

    localStorage.setItem(`accessToken`, accessToken);
    localStorage.setItem(`userName`, userName)

    console.log(json);

    window.location.href = "/profile/index.html";

    return json;
  } catch (error) {
    console.log("error is", error);
  }
}