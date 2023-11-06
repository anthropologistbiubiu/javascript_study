
// 数组的操作



// 创建数组

const arr1 = new Array(1,2,3,4);
const arr2 = [1,2,3,4];
for (var i in arr1) {
   console.log(i);
};

for (var i of arr1) {
   console.log(i)
};


// 创建长度不为0的空数组
const arr3 = new Array(10)
console.log('arr3',arr3,arr3.length);
const arr4 = [];
console.log('arr4',arr4,arr4.length);
arr4[0] = 1;
arr4[0] = 2;
arr4[1] = 1;
arr4[2] = 1;
console.log('arr4',arr4,arr4.length)


// 遍历数组
const colors = ['red','orange','green','blue','pink'];
colors.forEach(color=>{
   console.log(color)
});

// 数组所有的方法都要学明白

// 1.concat
let arr5 = [1,2,3]
let arr6 = [4,5,6]
arr7 = arr5.concat(arr6);
console.log(arr7);
//2.join

let arr8 = ["sun","wei","ming"]
str1 = arr8.join(",")
console.log(str1,typeof(str1))

// 3.push
var length = arr8.push('ai')
console.log(arr8,length)
//4. pop
var item= arr8.pop()
console.log(item,arr8)

// 5.shift
 item = arr8.shift()
console.log(arr8,item)
//6.unshift
arr8.unshift('sun','da','sheng')
console.log(arr8)


// 6.slice

arr9 = arr8.slice(0,1)
console.log(arr9)
//7.at
item = arr9.at(0)
console.log(item)

// 8.reverse

arr8.reverse()
console.log(arr8)

// 9.sort

arr8.sort()
console.log(arr8)

// 10 forEach

const a = ['a','b','c']

a.forEach((elem)=>{
   console.log('jiaruaiyoutianyi',elem)
})


// 11 map

const a1 = ["a","b","c"];
const a2 = a1.map((item) =>{
   transferItem = item.toUpperCase()
   return transferItem
});
console.log(a2);

// 12. fileter

const a3 = ['a','b','c',10,20,30];
const a4 = a3.filter((item)=>{
   if (typeof item === 'number'){
      return true;
   }
   return false;
});
console.log(a4);

// find

const j = a3.find((item)=>{
   if (typeof item == 'number') {
      return true
   };
});
console.log(j)