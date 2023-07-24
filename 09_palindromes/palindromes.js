const palindromes = function (string) {
    // create new string with only alphabet letters
    // -- use filter?
    // check if new string == reversed string
    string = string.toLowerCase();
    stringArr = string.split('').filter(letter => letter !== letter.toUpperCase());
    reversedArr = stringArr.slice().reverse().toString();
    stringArr = stringArr.toString()
    return reversedArr == stringArr;
};

console.log(palindromes("racecar"))

// Do not edit below this line
module.exports = palindromes;
