

//const wait = msg => new Promise((resolve,reject) => setTimeout(resolve,ms));

console.log("开始执行");
setTimeout(function(){
    console.log("延迟执行");
}, 2000); // 在2秒后执行
console.log("继续执行");


// 成功的回调函数
function successCallback(result) {
    console.log("音频文件创建成功：" + result);
}

// 失败的回调函数
function failureCallback(error) {
    console.log("音频文件创建失败：" + error);
}

//createAudioFileAsync(audioSettings, successCallback, failureCallback);

function loadImage(url) {
    return new Promise(function(resolve, reject) {
        const img = new Image();
        img.onload = function() {
            resolve(img);
        };
        img.onerror = function() {
            reject(new Error("图片加载失败"));
        };
        img.src = url;
    });
}

// 使用Promise加载图片
loadImage("example.jpg")
    .then(function(img) {
        document.body.appendChild(img);
        console.log("图片加载成功");
    })
    .catch(function(error) {
        console.error("错误：" + error.message);
    });
