// promise


function successCallBack(){
    console.log("successCallBack");
}

function failCallBack(){
   console.log('failCallBack');
}


//链式调用
// 连续执行两个或者多个异步操作是一个常见的需求，在上一个操作执行成功之后，开始下一个的操作，
// 并带着上一步操作所返回的结果。在旧的回调风格中，这种操作会导致经典的回调地狱：



// 创建promise
// 创建一个简单的Promise，模拟异步操作
const myPromise = new Promise((resolve, reject) => {
    // 异步操作
    const success = true;
    if (success) {
        resolve("成功的结果");
    } else {
        reject("失败的原因");
    }
});

myPromise.then((result)=>{
    console.log('成功: '+result);
}).catch((error)=>{
    console.log('失败: '+error)
})

// 模拟异步操作

function fetchData() {
    return new Promise((resolve, reject) => {
        // 模拟异步操作，例如网络请求
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("成功的数据");
            } else {
                reject("失败的原因");
            }
        }, 2000);
    });
}

// 调用fetchData并处理结果
fetchData()
    .then((data) => {
        console.log("成功：" + data);
    })
    .catch((error) => {
        console.error("失败：" + error);
    });
