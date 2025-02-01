const reverseString = function(string) {
    let newString = string.toString();
    let stringIndex = string.length - 1;
    let reversedString ='';

    for (let i = stringIndex; i >= 0; i--) {
        reversedString += newString.at(i);
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
