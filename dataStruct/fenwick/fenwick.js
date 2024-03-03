
class FenwickTree{
    constructor(nums) {
        this.nums = nums
        this.tree = new Array(nums.length+1).fill(0)
        this.capacity = nums.length
    }
    Init() {
        for (let i = 0; i < this.tree.length; i++) {
            this.update(i+1,this.nums[i])
        }
    }
    update(i,delta){
       while (i <= this.capacity) {
           this.tree[i] += delta
           i += this.lowBit(i)
       }
    }
    Query(index){
        let total = 0
        while (index > 0) {
            total += this.tree[index]
            index -= this.lowBit(index)
        }
        return total
    }
    lowBit(x){
       return x & -x
    }
    QueryRange(start,end){
        return this.Query(end) - this.Query(start-1)
    }
}

nums = [1, 3, 5, 7, 9, 11, 13, 15]
bit = new FenwickTree(nums)
bit.Init()
console.log(bit.tree)
rangeResutl = bit.QueryRange(1,5)
console.log(rangeResutl)