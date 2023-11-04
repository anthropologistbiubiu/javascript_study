var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
   "orderNo": "1_359818241868632065",
   "merchantNo": "6097102022",
   "merTradeNo": "pm_2022110305",
   "amount": "150.00",
   "actualAmount": "150.00",
   "poundage": "4.00",
   "orderStatus": "1",
   "createTime": "1667455293000",
   "sign": "1DA4B890C7469CADECF7243817594111"
});

var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: raw,
   redirect: 'follow'
};

fetch("https://www.payhayu.com创建支付订单的入参callbackUrl", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));