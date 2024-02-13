export async function registerUser(url, data) {
  try {
    const postData = {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);

    if(!response.ok) {
      throw new Error("HTTP error" + response.status);
    }

    const json = await response.json();

    console.log("json", json);

    localStorage.setItem("registerName", data.name);

    window.location.href = "../success.html";

    return json;
  } catch (error) {
    console.log("error is", error);
  }
}