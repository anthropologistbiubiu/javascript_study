export async function fetchPostRequest(url, data) {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function fetchGetRequest(url) {
  let res = await fetch(url, {
    method: "GET",
    // body: JSON.stringify(data),
  });
  return res.json();
}
