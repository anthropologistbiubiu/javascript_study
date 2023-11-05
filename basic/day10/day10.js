// 数字与日期
//import moment from "./node_modules/moment";
const moment = require('moment');

const biggestNum = Number.MAX_VALUE
console.log('biggestNum',biggestNum)

const smallestNum = Number.MIN_VALUE
console.log('smallestNum',smallestNum)

const infiniteNum = Number.POSITIVE_INFINITY
const  notNum = Number.NaN

const negInfiniteNum = Number.NEGATIVE_INFINITY
console.log('negInfiniteNum',negInfiniteNum)

var number1 = Number.parseFloat('123456.1111')
var number2 = Number.parseInt('123456')
var number3 =('123456')
console.log('number1',number1)
console.log('number2',number2)



// 无参数创建时间日期对象
var dateObject = new Date()
console.log('date',dateObject)
console.log(dateObject.getFullYear())
console.log(dateObject.getMonth())
console.log(dateObject.getDay())
console.log(dateObject.getHours())
console.log(dateObject.getMinutes())
console.log(dateObject.getSeconds())
console.log(dateObject.getTime())


// moment 格式化时间日期对象
const start = new Date();
const end = new Date()
start.setTime(start.getTime() - 86400 * 30 * 1000);
var startTime = moment(start).format('YY-MM-DD HH:MM:SS')
var endTime = moment(end).format('YY-MM-DD HH:MM:SS')
console.log(startTime)
console.log(endTime)

// 日期创建时间对象

var  dateObject1 = new Date(2023,1,0)
console.log('dateObject',dateObject1)


var dateObject2 = new Date(1635837825000)
console.log(dateObject2)


// 获取当前时间的时间戳
var timestamp1 = new Date();
console.log('timestamp1',timestamp1.getTime())
console.log('Date.now()',Date.now())
