/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const myArr = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i )){
            myArr.push(arr[i]);
        }
    }
    return myArr
    
};