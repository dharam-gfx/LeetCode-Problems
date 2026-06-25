/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let newval = init;
    nums.forEach((el, i) => {
       newval = fn(newval , el)
    })
     
    return newval
};