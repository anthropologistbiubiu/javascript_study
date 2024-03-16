function selectSort(arr) {

    let minIndex = 0;
    let minValue = 0;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        minValue = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < minValue) {
                minIndex = j;
                minValue = arr[j];
            }
            ;
        }
        arr[minIndex] = arr[i];
        arr[i] = minValue;
    }
    ;
    return arr;
};


function main() {

    arr = [9, 2, 1, 10, 22, 14, 7, 89, 15, 0];
    console.log(selectSort(arr));
};


main();