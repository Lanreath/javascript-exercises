const reverseString = function(s) {
    let str = s.split("");
    let newStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        newStr.push(str[i]);
    }
    return newStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
