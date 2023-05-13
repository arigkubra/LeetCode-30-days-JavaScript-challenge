/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let store = init;
    nums.forEach((num) => {
        store = fn(store, num)
    })
    return store;
};