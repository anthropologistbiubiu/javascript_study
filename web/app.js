import { axiosRequest } from "./axios/request.js";
import { axiosRequestWithPromise } from "./axios/request.js";
import { axiosRequestWithReturn } from "./axios/request.js";
import { fetchPostRequest } from "./fetch/fetch.js";
import { fetchGetRequest } from "./fetch/fetch.js";

/*
axiosRequestWithPromise("/fetch")
  .then((res) => {
    console.log("Request completed", res);
  })
  .catch((err) => {
    console.error("Request failed", err);
  });
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

*/

let res = await fetchPostRequest("http://localhost:9091/fetch", {
  name: "exampleName",
});
console.log("Fetch POST response:", res);

res = await fetchGetRequest("http://localhost:9091/id?username=exampleName");
console.log("Fetch Get response:", res);
