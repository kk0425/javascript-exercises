const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    }
    let a = 1;
    let b = 1;
    for (let i = 1; i < num; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
