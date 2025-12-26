//const axios = require("axios");
import axios from "axios";

/*
axios
  .get("http://localhost:9090/fetch")
  .then((response) => console.log("Response:", response.data))
  .catch((error) => console.error("Error:", error));
*/

// axios 的封装

const axiso = axios();

export function axiosRequest(url) {
  console.log("axiosInstance:", url);

  axios
    .post(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
