const removeFromArray = function(arr) {
    newArr = [];
    elemsToRemove = Array.from(arguments).slice(1, arguments.length);
    // for (let i = 0; i < arr.length; i++) {
    //     if (!(elemsToRemove.includes(arr[i]))) {
            
    //         newArr.push(arr[i])
    //     }
    // };

    for (let i = 0; i < arr.length; i++) {
        if (elemsToRemove.includes(arr[i])) {
            console.log(arr[i])
            arr.splice(i, 1);
            i--;
        };
    };

    return arr
    // return newArr

};
console.log(removeFromArray([1,2,3,4], 1,2,3,4))
// Do not edit below this line
module.exports = removeFromArray;
