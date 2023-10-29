

//const wait = msg => new Promise((resolve,reject) => setTimeout(resolve,ms));


console.log("开始执行");
setTimeout(function{
    console.log("延迟执行");
}, 2000); // 在2秒后执行
console.log("继续执行");
