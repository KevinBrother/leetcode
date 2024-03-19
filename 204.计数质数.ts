/*
 * @lc app=leetcode.cn id=204 lang=typescript
 *
 * [204] 计数质数
 */

// @lc code=start
// 暴力超时
/* function countPrimes(n: number): number {
  let result = 0;
  for (let i = 2; i < n; i++) {
    let j = 2;
    let flag = true;
    while (j <= i) {
      const division = i / j;
      const isDecimal = division % 1 === 0;
      // 只能被 1 和 本身 整除
      if (isDecimal && division !== 1) {
        flag = false;
        break;
      }
      j++;
    }

    if (flag) {
      result++;
    }
  }
  return result;
}
 */

function countPrimes(n: number): number {
  function isPrimes(n) {
    for (let i = 2; i * i <= n; ++i) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

  let result = 0;
  for (let i = 2; i < n; ++i) {
    if (isPrimes(i)) {
      result++;
    }
  }
  return result;
}

// console.log("first", countPrimes(10));
// console.log("first", countPrimes(2));
// console.log("first", countPrimes(0));
// console.log("first", countPrimes(499979));
// @lc code=end
