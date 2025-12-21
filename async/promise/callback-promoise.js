function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1️⃣ doSomething 完成");
      resolve(1001);
    }, 500);
  });
}

function doSomethingElse(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2️⃣ doSomethingElse 完成，userId =", userId);
      resolve("ORDER-888");
    }, 500);
  });
}

function doThirdThing(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3️⃣ doThirdThing 完成，orderId =", orderId);
      resolve(299.99);
    }, 500);
  });
}

function failureCallback(err) {
  console.error("❌ 出错了:", err);
}

doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log("✅ Got the final result:", finalResult);
  })
  .catch(failureCallback);
