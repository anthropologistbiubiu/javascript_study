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