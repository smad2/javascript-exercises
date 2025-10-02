const removeFromArray = function(arr, remove) {
    const index = arr.findIndex(item  => item === remove);
    if(index >= 0){
        arr.splice(index,1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
