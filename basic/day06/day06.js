
// 用async 和await 来重写promise

// task1
/*
function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}


loadJson('https://javascript.info/no-such-user.json')
        .catch(); // Error: 404
*/
async function LoadJson(url){
   let response = await fetch(url);
   if (response.status == 200) {
       let json = await response.json()
       return json
   }
  throw new Error(response.status)
}

LoadJson('https://javascript.info/no-such-user.json').catch()
// 异常处理
// 11月13号开始完成异常处理的过程。


