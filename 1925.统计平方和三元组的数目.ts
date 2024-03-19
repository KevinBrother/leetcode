/*
 * @lc app=leetcode.cn id=1925 lang=typescript
 *
 * [1925] 统计平方和三元组的数目
 */

// @lc code=start
// 平方和 a² + b² = (a * b)² - 2ab
// 平方差 a² - b² = (a + b)(a - b)
// 平方差 a² + b² =  c²
// function countTriples(n: number): number {
//   let result = 0;
//   for (let i = 1; i < n; ++i) {
//     const c = Math.sqrt(Math.pow(n, 2) - Math.pow(i, 2));
//     if (c % 1 === 0) {
//       ++result;
//       console.log("first", [i, c, n]);
//       continue;
//     }
//   }

//   return result;
// }
function countTriples(n: number): number {
  let result = 0;
  for (let i = 1; i <= n; ++i) {
    for(let j = 1; j <= n; ++j) {
        let iPow = Math.pow(i, 2)
        let jPow = Math.pow(j, 2)

        const c = Math.sqrt(iPow + jPow);
        // chrome 122版本有bug  https://issues.chromium.org/issues/330207613
        // const c = Math.hypot(i, j)
        
        if(c > n) {
            break;
        }

        if (c % 1 === 0) {
          ++result;
          console.log("first", [i, j, c]);
          continue;
        }
    }
  }

  return result;
}

// console.log("first", countTriples(5));
console.log("first", countTriples(10));

// @lc code=end
