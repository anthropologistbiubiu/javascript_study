import { axiosRequest } from "./axios/request.js";
import { axiosRequestWithPromise } from "./axios/request.js";
import { axiosRequestWithReturn } from "./axios/request.js";

/*
axiosRequestWithPromise("/fetch")
  .then((res) => {
    console.log("Request completed", res);
  })
  .catch((err) => {
    console.error("Request failed", err);
  });
*/
axiosRequestWithReturn("/fetch")
  .then((res) => {
    console.log("Request completed", res.data);
  })
  .then(() => {
    console.log("Additional processing after request");
  })
  .catch((err) => {
    console.error("Request failed", err.message);
  });
