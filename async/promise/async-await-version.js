function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1️⃣ doSomething 执行完成");
      resolve(1001); // 👈 一定要 resolve 返回值
    }, 500);
  });
}

function doSomethingElse(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2️⃣ doSomethingElse 执行完成, userId =", userId);
      resolve("ORDER-888"); // 👈 返回新值
    }, 500);
  });
}

function doThirdThing(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3️⃣ doThirdThing 执行完成, orderId =", orderId);
      resolve(299.99); // 👈 最终结果
    }, 500);
  });
}

function failureCallback(err) {
  console.error("❌ 出错了:", err);
}

async function run() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log("Got the final result:", finalResult);
  } catch (err) {
    failureCallback(err);
  }
}

run();
