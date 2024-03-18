function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    };
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    let l = 0;
    let r = 0;
    let result = new Array();
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l]);
            l++;
        } else {
            result.push(right[r]);
            r++;
        };
    }
    if (l < left.length) {
        return result.concat(left.slice(l, left.length));
    }
    return result.concat(right.slice(r, right.length));
};


function main() {
    arr = [9, 2, 1, 10, 22, 14, 7, 89, 15, 0];
    console.log(mergeSort(arr));
    //console.log(arr.concat(arr.slice(0,arr.length)))
};


main();
