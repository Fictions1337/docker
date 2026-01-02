const api = "http://91.99.128.94:8000/";

const response = await fetch(api);
const data = await response.json()

document.getElementById("message").innerHTML = data.message;