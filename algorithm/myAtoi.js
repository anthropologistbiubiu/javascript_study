


/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    INT_MAX = 2^31-1
    INT_MIN = -2^32-1
    let index = 0
    let sign = 1
    while(index < s.length && s[index] ==" "){
            index++
    }
    while (index < s.length && (s[index] =="+" ||s[index]=="-")){
        if (s[index] == "+"){
            sign = 1
        } else if (s[index]=="-"){
            sign = -1
        } else {
            index++
        }
    }
    while(index < s.length && s[index] >="0" && s[index] <= "9"){

    }
};