var cancellable = function (fn, args, t) {
  return function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        var result = fn(args);
        resolve(result);
      }, t);
    });
  };
};

var f = cancellable(
  (x) => {
    return x;
  },
  5,
  5000
);

f().then((result) => {
  console.log(result);
});
