/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
function findMin(nums: number[]): number {
    // [17, 11, 13, 15]
    let left =0, right = nums.length-1;

    let middle = 0;
    while(left < right) {
        middle = Math.floor((right + left)/2);

        if(nums[middle] < nums[right]) {
            right = middle - 1;
        }else {
            left = middle + 1;
        }
    }

    return nums[middle];
};

console.log('findMin([3,4,5,1,2])', findMin([3,4,5,1,2]))
console.log('findMin([4,5,6,7,0,1,2])', findMin([4,5,6,7,0,1,2]))
// console.log('findMin([11,13,15,17])', findMin([11,13,15,17]))
// console.log('findMin([3,1,2])', findMin([3,1,2]))
// @lc code=end

