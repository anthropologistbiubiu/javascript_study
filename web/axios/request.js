//const axios = require("axios");
import axios from "axios";

/*
axios
  .get("http://localhost:9090/fetch")
  .then((response) => console.log("Response:", response.data))
  .catch((error) => console.error("Error:", error));
*/

// axios 的封装

const axiosInstance = axios.create({
  baseURL: "http://localhost:9091",
});
export function axiosRequest(url) {
  axiosInstance
    .get(url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

export function axiosRequestWithPromise(url) {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(url)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
}

export function axiosRequestWithReturn(url) {
  return axiosInstance.get(url);
}
