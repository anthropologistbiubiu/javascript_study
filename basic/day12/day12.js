// object 的用法


var car = new Object()

car.make = 'ford';
car.year= '1969';

for (var i in car) {
   console.log(i,car[i]);
};