




/*

隐式返回
 */
const createArray = () => new Array(5).fill(0)


// 显示返回
let arr = new Array(3).fill(null).map(
    () => { return new Array(3).fill(0)}
)

console.log(createArray())
console.log(arr)