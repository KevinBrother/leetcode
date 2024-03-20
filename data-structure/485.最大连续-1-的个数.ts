/*
 * @lc app=leetcode.cn id=485 lang=typescript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  // max 贪心算法？
  //
  let max = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      max = Math.max(max, sum);
      sum = 0;
      continue;
    }
    sum++;
  }
  max = Math.max(max, sum);
  return max;
}
// @lc code=end
