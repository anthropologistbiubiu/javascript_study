// 函数


function myFunction(theObject){
    theObject.make = 'Toyota';
};


const mycar = {
    make :'Honda',
    model :'Accord',
    year :1998,
}

myFunction(mycar);
console.log(mycar.make)

const square = function(number){
    return number*number;
};

console.log(square(4));

function map(f,a){
    var result = new Array(a.length);
    for (var i = 0;i < a.length;i++){
        result[i] = f(a[i]);
    };
    return result
};


const cube = function(num){
    return num*num*num;
};
const numbers = [1,2,3,4,5];
const numRes = map(cube,numbers)
console.log(numRes)


// 在javascript 当中可以根据

let f;
const num  =1;
if (num==1){
    f = function (theObject){
        theObject.make = 'Beijing';
    };
};


// 递归函数  斐波那契数列

function factorial(n){
    if (n==1 || n==0){
        return n
    } else {
        return factorial(n-1) +factorial(n-2);
    }
}


console.log(factorial(3))

// 函数的作用域  嵌套函数

function addSquare(a,b){

    function square(x){
       return x*x;
    };
    return square(a) +square(b);
};

console.log(addSquare(1,3));


//闭包

function outside(x){
    function inside(y){
       return x+y;
    };
   return inside
};


const fnInside = outside(3)
console.log(fnInside(5));
console.log(outside(10)(15))


// 多层嵌套
function A(a){
   function B(b){
        function C(c){
            console.log(a+b+c);
        };
        C(3);
   };
   B(2);
};

A(1);

// 命名冲突
function out(){

    const x = 5;
    function inside(x){
      return x*2;
    };
    return inside
};

console.log('######',out()(2));

// 使用 arguments 对象
// 函数的实际参数会保存在arguments 对象中;


function myContract(separator){
    let result = '';
    for(var i = 1;i < separator.length;i++){
        result  += arguments[i] + arguments[0];
    };
    return result;
};

console.log(myContract("、", "红", "橙", "蓝"));





// 默认参数和剩余参数
function multiply(a,b){
    b = typeof b !=="undefined" ?b:1;
    return a*b;
};
console.log(multiply(5))

// 剩余参数




// 箭头函数









