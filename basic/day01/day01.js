// 循环语句

//1. for 循环
var step

for(step=0;step<10;step++) {
    console.log('step',step)
}
//2.do while 循环

var i = 0
do{
    i+=1;
    console.log('i',i);
}while(i<5);


// 3.while
var n = 10;
var i = 0;
while(i<n) {
    console.log('while i',i);
    i++;
};


// 4.没有label break

var number = 0
for (var i =1;i<10;i++){
    for (var j = 0;j<10;j++){
        console.log('i,j',i,j);
       if (i== 5&& j==5){
           break
       };
       number++;
    };
    console.log('number',number);
}

// 5.有label break
var number2 = 0
outpoint:for(var i = 0;i<10;i++){
    for (var j = 0;j < 10;j++){
        console.log('label i,j',i,j)
        if (i ==5&&j==5){
            console.log('i,j',i,j)
           break outpoint;
        };
        number2++
    }
}
console.log('number2',number2)


// 6.continue
for (var i = 1;i<10;i++){
    if (i == 1 ){
        continue
    }
    console.log('i',i)
}

// 7. label continue



// 8. for in

var arr = [1,2,3,4,5]

for (var i in arr) {
    console.log(i);
}

// 9. for of
for (var j of arr) {
   console.log(j)
}

