const repeatString = function(string, num) {   
    let newString = string;
    
    for (i = 1; i < num; i++) {
        newString += string;
    } 
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
