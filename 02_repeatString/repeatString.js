const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    
    let strOutput = '';
    for (let i = 0; i < num; i++) {
        strOutput += string;
    }
    return strOutput;
};

// Do not edit below this line
module.exports = repeatString;
