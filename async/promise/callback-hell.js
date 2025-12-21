function doSomething(success, failure) {
  setTimeout(() => {
    console.log("1️⃣ doSomething 执行完成");
    success(1001); // 用户 ID
  }, 1000);
}

function doSomethingElse(userId, success, failure) {
  setTimeout(() => {
    console.log("2️⃣ doSomethingElse 执行完成，userId =", userId);
    success("ORDER-888"); // 订单 ID
  }, 1000);
}

function doThirdThing(orderId, success, failure) {
  setTimeout(() => {
    console.log("3️⃣ doThirdThing 执行完成，orderId =", orderId);
    success(299.99); // 订单金额
  }, 1000);
}

function failureCallback(err) {
  console.error("❌ 出错了:", err);
}

/*
doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log("Got the final result: " + finalResult);
        },
        failureCallback
      );
    },
    failureCallback
  );
}, failureCallback);
*/

doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log("Got the final result: " + finalResult);
  })
  .catch(failureCallback);
