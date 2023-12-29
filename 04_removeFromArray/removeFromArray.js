/*
function removeFromArray(array, ...values) {
    return array.filter(arrayValue => {
        for (const value of values) {
            if (value === arrayValue) {
                return false;
            }
        }
        return true;
    })
}
*/

function removeFromArray(numbers, ...removeValues) {
    const result = [];
    for (const number of numbers) {
        let numberInList = false;
        for (const removeValue of removeValues) {
            if (removeValue === number) {
                numberInList = true;
                break;
            }
        }
        if (!numberInList) result.push(number);
    }
    return result;
}

// Do not edit below this line
module.exports = removeFromArray;
