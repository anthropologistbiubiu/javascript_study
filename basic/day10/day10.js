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




var dateObject = new Date()
console.log('date',dateObject)
console.log(dateObject.getFullYear())
console.log(dateObject.getMonth())
console.log(dateObject.getDay())
console.log(dateObject.getHours())
console.log(dateObject.getMinutes())
console.log(dateObject.getSeconds())
console.log(dateObject.getTime())


// 创建一个日期对象

const start = new Date();
const end = new Date()
start.setTime(start.getTime() - 86400 * 30 * 1000);
var startTime = moment(start).format('YYMMDD')
var endTime = moment(end).format('YYMMDD')
console.log(startTime)
console.log(endTime)


//Sctime = moment(this.dateValue[0]).format('YYYYMMDD') // Date 类型
//Ectime = moment(this.dateValue[1]).format('YYYYMMDD') // Date 类型
