

function shellSort(arr) {
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < arr.length; i++) {
            let j;
            for ( j = i; j >= gap && arr[j-gap] > arr[i]; j -= gap) {
                console.log("j",j)
                arr[j] = arr[j-gap];
            };
            arr[j] = arr[i];
        };
    };
    return arr;
};



let arr = [12,34,54,2,3,0,19,24,38,89,229,74,1];
console.log("Original Array: " + arr);
console.log("Sorted Array: " + shellSort(arr));
