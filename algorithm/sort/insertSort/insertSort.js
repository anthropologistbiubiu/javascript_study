



function insertSort(arr){

    for (let i = 1;i<arr.length;i++){
        let j = i-1;
        let cur = arr[i];
        while(j>=0&&arr[j]<cur){
            arr[j+1] = cur[j]
           j--;
        }
        arr[j+1] = cur;
    }
    return arr;
};



function main(){
    arr = [9, 2, 1, 10, 22, 14, 7, 89, 15, 0];
    console.log(insertSort(arr));
};


main();