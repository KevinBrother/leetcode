/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  // const zeros = nums.filter((item) => item === 0);
  // if (zeros.length > 1) return nums.map(() => 0);

  const maxLength = nums.length;
  const LArr = new Array(maxLength);
  const RArr = new Array(maxLength);
  const result = new Array(maxLength);

  for (let i = 0; i < maxLength; i++) {
    if (i === 0) {
      LArr[0] = 1;
    } else {
      LArr[i] = LArr[i - 1] * nums[i - 1];
    }
  }

  for (let i = maxLength - 1; i >= 0; i--) {
    if (i === maxLength - 1) {
      RArr[maxLength - 1] = 1;
    } else {
      RArr[i] = RArr[i + 1] * nums[i + 1];
    }
  }

  for (let i = 0; i < maxLength; i++) {
    result[i] = LArr[i] * RArr[i];
  }
  console.log(LArr);
  console.log(RArr);

  return result;
}
// @lc code=end
