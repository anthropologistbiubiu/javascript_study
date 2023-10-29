import axios from 'axios';
// 发出HTTP GET请求
axios.get('https://www.baidu.com')
    .then((response) => {
        console.log(response.data); // 输出百度首页的HTML内容
    })
    .catch((error) => {
        console.error(error); // 错误处理
    });
