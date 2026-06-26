/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const nArr= [];
    for (let i = 0; i < arr.length; i++) {
        nArr.push( fn.length > 1 ? fn(arr[i] , i) : fn(arr[i]))
    }
    return nArr
};