class DisJoinSet{
    constructor(size) {
        this.parent = new Array(size)
        for (let i = 0; i < size; i++) {
            this.parent[i] = i
        }
        this.rank = new Array(size).fill(0)
    }

    find(x){
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x]
    }
    union(x,y) {
        let xRoot = this.find(x)
        let yRoot = this.find(y)
        if (xRoot === yRoot) {
           return
        }
        if (this.rank[xRoot] < this.rank[yRoot]){
           this.parent[xRoot] = yRoot
        } else if (this.rank[yRoot] < this.rank[xRoot]) {
            this.parent[yRoot] = xRoot
        } else {
            this.parent[yRoot] = xRoot
            this.rank[xRoot]++
        }

    }

}


ds1 = new DisJoinSet(10)
ds1.union(0,2)
ds1.union(1,2)
ds1.union(3,4)
console.log(ds1.find(1))
console.log(ds1.find(2))
console.log(ds1.find(3))
console.log(ds1.find(4))
