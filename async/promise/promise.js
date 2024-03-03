function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('开始请求远程数据，生成一个promise')
            let flag = false
            if (flag){
                resolve("rquest data successfully")
            }else {
               reject('net error')
            }
        }, 5000)
    })
}


fetchData().then(data => {
    console.log("请求数据成功了")
    console.log(data)
}).catch(error => {
    console.log("请求数据失败了")
    console.log(error)
})






