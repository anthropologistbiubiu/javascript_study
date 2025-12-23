new Promise((resolve, reject) => {
  setTimeout(() => {
    var a = 5;
    console.log(a); //5
    resolve(a);
  }, 1000);
})
  .then((res) => {
    console.log(res); //5
    return new Promise((resolve, reject) => {
      resolve(res);
    });
  })
  .then((res) => {
    console.log(res); //
  })
  .catch(() => {});

const test = async () => {
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  console.log(res); //1
};

test();

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // 等待，直到 promise resolve (*)

  console.log(result); // "done!"
}

f();

async function async_func() {
  return 1;
}

async_func().then((res) => console.log(res)); // 1
