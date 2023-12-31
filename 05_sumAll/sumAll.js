const sumAll = function(firstNum, lastNum) {
    if (firstNum < 0 || lastNum < 0 || typeof firstNum !== "number" || typeof lastNum !== "number") {
        return "ERROR";
    }
    let sum = 0;
    const minNum = Math.min(firstNum, lastNum);
    const maxNum = Math.max(firstNum, lastNum);
    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
