


function fetchData(callback){

    setTimeout(function (){
        console.log("开始执行")
        callback()
    },3000)
}


fetchData(function (){
    console.log("获取数据中...")
})







