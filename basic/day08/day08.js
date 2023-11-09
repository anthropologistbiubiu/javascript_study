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
a.mymethod()

// 在类体内有若干特性可以用


class Color {
    constructor(r,g,b) {
        this.value = [r,g,b]
    }
}

const red = new Color(255,0,0)
red.value = [0,0,-5]
console.log(red.value)

class myColor{
   constructor(...values){
       this.value = values
   }
   getRed(){
       return this.value[0]
   }
   setRed(red){
       this.value[0] = red
   }
}

const blue = new myColor(0,255,0)
console.log(blue.value)
blue.setRed(254)
console.log(blue.getRed())


// 封装

class privateColor{
    #values
    constructor(r,g,b) {
        this.#values =[r,g,b]
    };
    getRed(){
        return this.#values[0]
    }
    setRed(red){
        if (red <0|| red >255){
            throw new RangeError("无效的r值")
        }
       this.#values[0] = red
    }
}


var a1 = new privateColor(1,2,3)
console.log(a1.getRed())
a1.setRed(10)
console.log(a1.getRed())
a1.getRed()






