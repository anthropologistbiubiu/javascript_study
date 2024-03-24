// 堆排序函数


function MaxHeapSort(arr) {

    len = arr.length;
    function buildMaxHeap(arr, len) {
        for (let i = Math.floor(len / 2); i >= 0; i--) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let temp = arr[i];
            let larget = i;
            if (left < len && arr[left] > temp) {
                temp = arr[left];
                larget = left;
            };
            if (right < len && arr[right] > temp) {
                larget = right;
            };
            if (i != larget) {
                swap(i, larget)
                AdjustDown(i, len);
            };
        };
        console.log("heap",arr)
    };

    function AdjustDown(cur,length) {
        let left = 2 * cur + 1;
        let right = 2 * cur + 2;
        let  next;
        let tem = arr[cur];
        while (left < length || right < length) {
            if (arr[left] > tem) {
               next = left;
               tem = arr[left];
            }
            if (arr[right] > tem) {
                next = right;
                tem = arr[right];
            }
            left = 2 * next + 1;
            right = 2 * next + 2;
        };
        swap(next,cur);
    };

    function swap(i, j) {
        let tem = arr[i];
        arr[i] = arr[j];
        arr[j] = tem;
    };
    buildMaxHeap(arr,len);
    for (let i=0;i++;i< len){
       swap(i,len-1);
       console.log("xxxxx",arr)
       AdjustDown(i,len-i-1);
    };
    return arr;
};

let arr = [12,34,54,2,3,0,19,24,38,89,229,74,1];
console.log("Array: " + arr);
console.log("MaxHeapSort Array: " + MaxHeapSort(arr));
