/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let nArr = []
    arr.forEach((v, i) => {
      if (fn(v, i)){
        nArr.push(v)
      }
    })
    return nArr
};