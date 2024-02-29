class FenwickTree {
    constructor(size) {
        this.size = size;
        this.tree = new Array(size + 1).fill(0);
    }

    // 单点更新：在索引 index 处增加 value
    update(index, value) {
        while (index <= this.size) {
            this.tree[index] += value;
            index += this.lowbit(index);
        }
    }

    // 区间查询：计算数组从 1 到索引 index 的前缀和
    query(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= this.lowbit(index);
        }
        return sum;
    }

    // 计算 x 的最低位 1 所代表的值
    lowbit(x) {
        return x & -x;
    }
}

// 示例用法
const nums = [1, 2, 3, 4, 5];
const BIT = new FenwickTree(nums.length);
for (let i = 0; i < nums.length; i++) {
    BIT.update(i + 1, nums[i]); // 在索引 i+1 处增加 nums[i]
}

console.log(BIT.query(3)); // 查询前 3 个元素的和
