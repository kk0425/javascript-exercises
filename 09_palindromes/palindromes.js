const palindromes = function (str) {
    const palindrome = str.toLowerCase().match(/[a-z0-9]/g);
    for (let i = 0; i < palindrome.length / 2; i++) {
        if (palindrome[i] !== palindrome[palindrome.length - (i + 1)]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
