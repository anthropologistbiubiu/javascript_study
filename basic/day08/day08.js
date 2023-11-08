// 使用类

/*
这些对应于类的三个关键特征：
构造函数；
实例方法和实例字段；
静态方法和静态字段
 */


// 声明一个类

class Myclass {

    constructor() {} // 构造函数
     myField = "mycalss"
     mymethod = function (){
        console.log('hello world');
     }

    static myStaticMethod(){

    }
    static {

    }
}


var a = new Myclass()
console.log(a.myField)

a.myField = 'cat';
console.log(a.myField)
console.log(a.mymethod())

// 在类体内有若干特性可以用


class Color {
    constructor(r,g,b) {
        this.value = [r,g,b]
    }
}

const red = new Color(255,0,0)
console.log(red.value)