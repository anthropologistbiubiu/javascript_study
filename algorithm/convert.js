



/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    if (numRows == 1 || numRows > s.length){
        return s
    }
    let rows = new Array(numRows)
    let currentRow = 0
    let goingDown = false

    for (let char of s) {
        rows[currentRow] += char
        if (currentRow == 0 || currentRow == numRows - 1) {
            goingDown = !goingDown
        }
        if (goingDown) {
           currentRow += 1
        } else {
            currentRow -= 1
        }
    }
    let result = strings.join(rows)
    return result
};

/*
示例 1：
输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"


示例 3：
输入：s = "A", numRows = 1
输出："A"

 */

console.log(convert("PAYPALISHIRING"))
console.log(convert("A"))
