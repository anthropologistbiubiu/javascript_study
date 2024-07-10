/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let ans = new Array(2).fill(-1);
    while (left <= right){
        let mid =  Math.floor(left + (right - left) / 2)
        console.log('|||||||||||||||||',left,right,mid)
        if (nums[mid] > target){
            right = mid -1
        } else if (nums[mid] < target){
            left = mid + 1
        } else if (nums[mid] === target) {
            if (nums[mid] === nums[mid-1]){
                right = mid -1
            } else {
                ans[0] = mid
                break
            }
        }
    };
    left = 0;
    right = nums.length - 1;
    while (left <= right){
        let mid =  Math.floor(left + (right - left) / 2)
        if (nums[mid] > target){
            right = mid -1
        } else if (nums[mid] < target){
            left = mid + 1
        } else if (nums[mid] === target) {
            if (nums[mid] == nums[mid+1]){
                left = mid + 1
            } else {
                ans[1] = mid
                break
            }
        }
    };
    return ans
};