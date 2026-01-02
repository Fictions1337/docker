const api = "http://91.99.128.94:8000/";

fetch(api)
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP Error " + response.status);
        }
        return response.json()
    })
    .then(data => {
        document.getElementById("message").textContent = data.message;
    })
    .catch(error => {
        console.error(error);
        document.getElementById("message").textContent = "Failed to load message";
    });