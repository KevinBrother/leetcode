/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  let rst: number[][] = [];
  let path: number[] = [];
  let len = nums.length;
  let sd: { [key in number]: boolean } = {};

  function dsf(i) {
    if (i === len) {
      rst.push([...path]);
      return;
    }

    for (let j = 0; j < len; j++) {
      let cur = nums[j];
      if (sd[cur]) continue;
      // 先穿
      path.push(cur);
      sd[cur] = true;

      dsf(i + 1);
      sd[cur] = false;
      // 后脱
      path.pop();
    }
  }

  dsf(0);

  return rst;
}

console.log("first", permute([1, 2, 3]));
// @lc code=end
