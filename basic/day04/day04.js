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

if (num==1){
    f = function (theObject){

    };
};
