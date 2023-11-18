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






