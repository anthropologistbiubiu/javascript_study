

fetch('http://localhost:9090/fetch')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
