/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
    
    // 找到中间对比，再从另一边的中间。。。
    let left = 0, right = nums.length - 1;
    while(right >= left) {
        const middle = Math.floor((right + left) / 2);
        if(nums[middle] == target) {
            return middle;
        }else if(nums[middle] > target) {
            right = middle - 1;
        }else {
            left = middle + 1;
        }
    }

    return -1;
};
// search([-1,0,3,5,9,12], 9);
// search([5], 5);

// @lc code=end

