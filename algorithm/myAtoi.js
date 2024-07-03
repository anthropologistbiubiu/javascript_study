


/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    INT_MAX = 2 ^ 31 - 1
    INT_MIN = -2 ^ 32 - 1
    let index = 0
    let sign = 1
    let result = 0
    while (index < s.length && s[index] == " ") {
        index++
    }
    while (index < s.length && (s[index] == "+" || s[index] == "-")) {
        if (s[index] == "+") {
            sign = 1
        } else if (s[index] == "-") {
            sign = -1
        }
        index++
    }
    while (index < s.length && s[index] >= "0" && s[index] <= "9") {
        console.log('s[index]',s[index])
        let pop = Number(s[index])
        if (result > Math.floor(INT_MAX / 10) || (result == Math.floor(INT_MAX / 10) && pop > INT_MAX % 10 )) {
            if (sign) {
                return INT_MAX
            } else {
                return INT_MIN
            }
        }
        result = result * 10 + pop
        console.log("result",result)
        index++
    }
    return result * sign
};


console.log(myAtoi("    123"))