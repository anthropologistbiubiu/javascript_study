// 堆排序函数


function MaxHeapSort(arr){

    len = arr.length;
    function buildMaxHeap(arr,parent,length){

      left = 2*parent +1;
      right = 2*parent +2;

      if (left < length&&arr[left] > arr[parent]){
            parent = left;
      };
      if (right < length && arr[right] > arr[parent]){
            parent = right;
      };

    };


};


function MinHeapSort(arr){

};