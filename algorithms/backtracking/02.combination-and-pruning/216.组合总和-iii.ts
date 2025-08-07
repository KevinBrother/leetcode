/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
  let rst: number[][] = [];
  let path: number[] = [];
  let count: number = 0;

  function dfs(i) {
    if (count > n || i > 10) {
      return;
    }

    if (path.length == k) {
      if (count == n) {
        rst.push([...path]);
      }
      return;
    }

    for (let j = i; j <= n; j++) {
      path.push(j);
      count += j;

      dfs(j + 1);

      path.pop();
      count -= j;
    }
  }

  dfs(1);

  return rst;
}
// @lc code=end

console.log("combinationSum3(9,45)", combinationSum3(9, 45));
// console.log("combinationSum3(2,18)", combinationSum3(2, 18));
