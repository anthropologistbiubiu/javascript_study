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
        xRoot = this.find(x)
        yRoot = this.find(y)


    }

}