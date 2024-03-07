class Trans{
    trans(params) {
        let arr = params.split(" ").reverse()
        for(let i =0;i<arr.length;i++){
            str = arr[i].split("")
            for (let j = 0;j < str.length;j++){
                str[j] = str[j] == str[j].toLowerCase() ? toUpperCase() : str[j].toLowerCase()
            }
            str.join("")
        }
        return arr.jon(" ")
    }
}