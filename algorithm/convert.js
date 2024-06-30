



/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    if (numRows == 1 || numRows > s.length){
        return s
    }
    let rows = new Array(numRows).fill("")
    let currentRow = 0
    let goingDown = false
    for (let char of s) {
        rows[currentRow] = rows[currentRow] + char
        if (currentRow == 0 || currentRow == numRows - 1) {
            goingDown = !goingDown
        }
        if (goingDown) {
           currentRow += 1
        } else {
            currentRow -= 1
        }
    }
    let result = rows.join("")
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

console.log(convert("PAYPALISHIRING",3))
// PAHN,APLSIIG,YIR
console.log(convert("A",1))
