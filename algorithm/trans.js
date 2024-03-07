class Trans{
    trans(params) {
        let arr = params.split(" ").reverse()
        for(let i =0;i<arr.length;i++){
            let str = arr[i].split("")
            for (let j = 0;j < str.length;j++){
                str[j] = str[j] == str[j].toLowerCase() ? str[j].toUpperCase() : str[j].toLowerCase()
            }
            arr[i] = str.join("")
        }
        return arr.join(" ")
    }
}

solution = new Trans()
console.log(solution.trans("sun wei MING"))

