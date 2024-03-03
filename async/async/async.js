


function fetchData(){
  return new Promise((resolve,reject) => {
      setTimeout(function(){
          console.log('准备生成一个promise')
          console.log('开始准备数据当中')
          let flag = false
          if (flag) {
              let data = [1,2,3,4,5,6]
              resolve(data)
          } else {
              let err = 'net work err'
              reject(err)
          }
      },5000)
  })
}



async function main(){
    try {
        const data = await fetchData();
        console.log("promise 获取数据成功");
        console.log(data);
    } catch (err) {
        console.log("promise 获取数据失败");
        console.error(err);
    }
}


main()