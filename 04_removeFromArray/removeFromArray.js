const removeFromArray = function(anArray,...toRemove) {
    for (let i = toRemove.length; i > 0; i--) {
        for (let x = anArray.length; x > 0; x--) {
            if (anArray[x - 1] === toRemove[i - 1]) {
                anArray.splice(x-1,1);
            }
        }
    }
    return anArray;
}

// Do not edit below this line
module.exports = removeFromArray;
