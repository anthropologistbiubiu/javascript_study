

const axios = require('axios');

axios.get("http://localhost:9090/fetch")
    .then(response => console.log("Response:", response.data))
    .catch(error => console.error("Error:", error));