function doSomething(success, failure) {
  setTimeout(() => {
    const ok = false; // 👈 模拟失败

    if (!ok) {
      failure("doSomething 失败：用户不存在");
      return;
    }

    success(1001);
  }, 1000);
}

function doSomethingElse(userId, success, failure) {
  setTimeout(() => {
    if (!userId) {
      failure("doSomethingElse 失败：userId 无效");
      return;
    }

    success("ORDER-888");
  }, 1000);
}

function doThirdThing(orderId, success, failure) {
  setTimeout(() => {
    if (!orderId) {
      failure("doThirdThing 失败：orderId 无效");
      return;
    }

    success(299.99);
  }, 1000);
}

function failureCallback(err) {
  console.error("❌ failureCallback 被调用:", err);
}

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
