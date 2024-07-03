


/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    const INT_MAX = Math.pow(2,31) - 1
    const INT_MIN = -Math.pow(2,31)
    let index = 0
    let sign = 1
    let result = 0
    while (index < s.length && s[index] == " ") {
        index++
    }
    if (index < s.length && (s[index] == "+" || s[index] == "-")) {
        sign = s[index] === "-" ? -1 : 1
        index++
    }
    while (index < s.length && s[index] >= "0" && s[index] <= "9") {
        let pop = parseInt(s[index],10)
        if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && pop > (INT_MAX % 10 ))) {
            return sign === 1 ? INT_MAX : INT_MIN
        }
        result = result * 10 + pop
        index++
    }
    return result * sign
};


console.log(myAtoi("+-12"))