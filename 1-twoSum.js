/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let output = [];
    let i;
    for (i = 0; i < nums.length; i++ ){
        for (k = i + 1; k < nums.length; k++){
            if ((nums[i] + nums[k]) === target){
                output.push(i,k)
            }
            
        }
    }
    
    return output
};
const target = 9;
const nums = [2,7,11,15];
twoSum(nums, target);