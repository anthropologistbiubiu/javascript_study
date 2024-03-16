function bubbleSort(arr) {
    let length = arr.length
    let swapped = false
    do {
        swapped = false
        length -= 1
        for (let i = 0; i < length; i++)
            if (arr[i] > arr[i + 1]) {
                let tem = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tem
                swapped = true
            }
    } while (swapped)
    return arr
}
function main(){
    arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    result = bubbleSort(arr)
    console.log(result)
}
main();