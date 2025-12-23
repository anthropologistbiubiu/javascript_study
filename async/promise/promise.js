function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1️⃣ doSomething 完成");
      resolve(1001);
    }, 500);
  })
    .then((result) => {
      // throw new Error("模拟错误");
      //return doSomethingElse(result);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("2️⃣ doSomethingElse 完成，userId =", result);
          resolve("ORDER-888");
        }, 500);
      });
    })
    .then((newResult) => {
      //return doThirdThing(newResult);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("3️⃣ doThirdThing 完成，orderId =", newResult);
          resolve("299.99");
        }, 500);
      });
    })
    .then((finalResult) => {
      console.log("✅ Got the final result:", finalResult);
    })
    .catch((err) => {
      console.error("❌ 出错了:", err);
    });
}

function doSomethingElse(userId) {
  setTimeout(() => {
    console.log("2️⃣ doSomethingElse 完成，userId =", userId);
    return "ORDER-888";
  }, 500);
}

function doThirdThing(orderId) {
  setTimeout(() => {
    console.log("3️⃣ doThirdThing 完成，orderId =", orderId);
    return 299.99;
  }, 500);
}

function failureCallback(err) {
  console.error("❌ 出错了:", err);
}

/*
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log("✅ Got the final result:", finalResult);
  })
  .catch(failureCallback);
*/

doSomething();
