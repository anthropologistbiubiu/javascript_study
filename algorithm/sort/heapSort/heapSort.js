// 堆排序函数


function MaxHeapSort(arr) {
    buildMaxHeap(arr, arr.length);
    for (let i = 0; i < arr.length; i++) {
        swap(arr,0, arr.length - 1 - i);
        AdjustDown(arr,0, arr.length - 1 - i);
    };
    return arr;
};

function buildMaxHeap(arr, len) {
    for (let i = Math.floor(len / 2); i >= 0; i--) {
            AdjustDown(arr,i, len);
    };
};
function AdjustDown(arr,cur, length) {
    let j = cur;
    let i = 2*j+1;
    while(i < length){
        if (i+1 < length && arr[i] < arr[i+1] ){
           i++;
        }
        if (arr[i] > arr[j]) {
           swap(arr,i,j)
            j = i;
            i = 2 * j + 1;
        } else {
            return;
        }
    };
}

function swap(arr,i, j) {
    let tem = arr[i];
    arr[i] = arr[j];
    arr[j] = tem;
};

let arr = [12, 34, 54, 2, 3, 0, 19, 24, 38, 89, 229, 74, 1];
console.log("Array: " + arr);
console.log("MaxHeapSort Array: " + MaxHeapSort(arr));
