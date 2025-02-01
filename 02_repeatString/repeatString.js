const repeatString = function(string, num) {   
    let newString = string;
    if (num === 0) {
        newString = "";
    } else if (num < 0) {
        newString = "ERROR";
    } else {
        for (i = 1; i < num; i++) {
            newString += string;
        } 
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
