/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    // 快慢指针
    if(nums.length < 2) {
        return nums.length
    }
    let slow = 0, fast = 1;

    while(fast < nums.length) {
        if(nums[slow] === nums[fast]) {
            nums.splice(fast, 1);
        }else {
            slow++;
            fast++;
        }
    }

    return nums.length;
};

const arr = [1,1,2]
console.log('first', removeDuplicates(arr), arr)
// @lc code=end

