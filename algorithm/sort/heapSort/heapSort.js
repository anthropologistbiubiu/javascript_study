// 堆排序函数


function MaxHeapSort(arr) {

    len = arr.length;
    function buildMaxHeap(arr, len) {
        for (let i = Math.floor(len / 2); i >= 0; i--) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let temp = arr[i];
            let larget = i;
            if (left < length && arr[left] > temp) {
                temp = arr[left];
                larget = left;
            };
            if (right < length && arr[right] > temp) {
                larget = right;
            };
            if (i != larget) {
                swap(i, larget)
                AdjustDown(i, len);
            };
        };
    };

    function AdjustDown(parent,length) {
        let left = 2 * parent + 1;
        let right = 2 * parent + 2;
        let larget;
        let tem = arr[parent];
        while (left < len && right < len) {
            if (arr[left] > tem) {
               larget = left;
            }
            if (arr[right] > tem) {
                larget = right;
            }
        };
        swap(larget,parent);
    };

    function swap(i, j) {
        let tem = arr[i];
        arr[i] = arr[j];
        arr[j] = tem;
    };
    buildMaxHeap(arr,len);
    for (let i=0;i++;i< len){
       swap(i,len-1);
       AdjustDown(i,len-i);
    };
    return arr;
};

let arr = [12,34,54,2,3,0,19,24,38,89,229,74,1];
console.log("MaxHeapSort Array: " + arr);
console.log("MaxHeapSort Array: " + MaxHeapSort(arr));
