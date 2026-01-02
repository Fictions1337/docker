const api = "http://91.99.128.94:8000/";

fetch(api).then(data => {
    document.getElementById("message").innerHTML = data.message;
})