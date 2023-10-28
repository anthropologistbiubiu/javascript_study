/*
。npm的主要功能是帮助开发者在Node.js环境中管理和共享JavaScript包，
这些包可以包括库、框架、工具等。npm允许开发者轻松地安装、更新、删除和发布Node.js模块和软件包。
 npm的全称是"Node Package Manager"，它是Node.js的包管理工具，而不是Node.js的客户端工具
 */
//import axios from 'axios'   // 在浏览器中使用
const axios = require('axios');
// 发出get请求
axios.get('www.baidu.com')
    .then((response) => {
    console.log(response);
})
    .catch((error)=>{
        console.log(error);
    });
