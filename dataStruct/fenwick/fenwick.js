

class FenwickTree{

    constructor(nums) {
        this.nums = nums
        this.tree = new Array(nums.size()+1).fill(0)
        this.capacity = nums.size()
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

    }
    lowBit(x){
       return x & -x
    }

    QueryRange(start,end){
    }

}

bit = new FenwickTree(nums)
bit.Init()
rangeResutl = bit.QueryRange(1,5)
console.log(rangeResutl)