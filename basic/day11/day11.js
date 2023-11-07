// map 的用法

const saying = new Map()


saying.set('dog','woof');
saying.set('cat','meow');
saying.set('elephant','toot');
saying.set('dog','woof');
console.log(saying.size)
console.log(saying.get('cat'))

for (const [key,value] of saying) {
    console.log(key,value);
};

saying.clear()
console.log(saying.size)


// set 的操作

const mySet = new Set()

mySet.add('1')
mySet.add('2')
mySet.add('3')
console.log(mySet.size)
console.log(mySet.has('4'))

for (let i of mySet) {
    console.log(i)
};


// object和map 的比较




