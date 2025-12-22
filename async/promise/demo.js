let a = 0;

// 🚦
new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve();
    console.log(a); //1
  }, 1000);
})
  .then(() => {
    console.log(a); //1
  })
  .then(() => {
    a = 2;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(a);
      }, 1000);
    });
  })
  .then((value) => {
    console.log(a); //2
    console.log(value); //2
  })
  .catch((error) => {
    console.log("error", error);
  });
