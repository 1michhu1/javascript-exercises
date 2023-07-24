const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number"
        || num1 < 0 || num2 < 0) return "ERROR";

    let bigNum;
    let smallNum;  
    if (num1 > num2) {
        bigNum = num1;
        smallNum = num2;
    } else {
        bigNum = num2;
        smallNum = num1;
    }
    console.log("big "+ bigNum)
    console.log("small " + smallNum)
    sum = 0;
    for (let i = smallNum; i <= bigNum; i ++ ) {
        sum += i;
    }

    return sum
};

console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
