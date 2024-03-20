// 堆排序函数
function heapSort(array) {
    // 构建最大堆
    function buildMaxHeap(array) {
        const n = array.length;
        // 从最后一个非叶子节点开始，向前遍历每一个节点
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(array, i, n);
        }
    }
    // 堆调整
    function heapify(array, i, heapSize) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let largest = i;
        // 找到左右节点中的最大值
        if (left < heapSize && array[left] > array[largest]) {
            largest = left;
        }
        if (right < heapSize && array[right] > array[largest]) {
            largest = right;
        }
        // 如果最大值不是当前节点，则交换并继续调整
        if (largest !== i) {
            [array[i], array[largest]] = [array[largest], array[i]];
            heapify(array, largest, heapSize);
        }
    }

    // 构建最大堆
    buildMaxHeap(array);

    // 从最大堆中逐步取出元素，进行堆调整
    for (let i = array.length - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        heapify(array, 0, i);
    }

    return array;
}

// 示例
const array = [3, 0, 2, 5, -1, 4, 1];
console.log("Before sorting:", array);
console.log("After sorting:", heapSort(array.slice()));
