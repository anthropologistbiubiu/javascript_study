const axios = require('axios');

axios.post('www.baidu.com', { key: 'value' })
    .then((response) => {
        console.log(response.data); // 响应数据
    })
    .catch((error) => {
        console.error(error); // 错误处理
    });
