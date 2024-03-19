/*
 * @lc app=leetcode.cn id=1620 lang=typescript
 *
 * [1620] 网络信号最好的坐标
 */

// @lc code=start
// TODO 思路没问题，但是结果不对
// https://leetcode.cn/problems/coordinate-with-maximum-network-quality/solutions/1940863/wang-luo-xin-hao-zui-hao-de-zuo-biao-by-7x1qm/
function bestCoordinate(towers: number[][], radius: number): number[] {
  const { maxX, maxY } = getMaxPoint(towers);
  let result = [0, 0];
  let max = 0;
  for (let x = 0; x <= maxX; x++) {
    for (let y = 0; y <= maxY; y++) {
      let total = 0;

      for (let [tx, ty, tq] of towers) {
        let distance = Math.ceil(
          Math.hypot(Math.abs(tx - x), Math.abs(ty - y))
        );
        if (distance > radius) {
          continue;
        }

        let sign = Math.floor(tq / (1 + distance));
        total += sign;
      }

     if (total > max) {
        max = total;
        result = [x, y];
      }
    }
  }

  return result;
}

function getMaxPoint(towers: number[][]) {
  let maxX = 0,
    maxY = 0;
  for (let tower of towers) {
    maxX = Math.max(maxX, tower[0]);
    maxY = Math.max(maxY, tower[1]);
  }

  return { maxX, maxY };
}



console.log('first', bestCoordinate([[33,24,12],[5,34,12],[9,45,6],[28,12,12]], 2)) // [5,34]


/* console.log(
  "first",
  bestCoordinate(
    [
      [0, 1, 2],
      [2, 1, 2],
      [1, 0, 2],
      [1, 2, 2],
    ],
    1
  )
); // [1,1] */

// console.log('first', bestCoordinate([[23,11,21]], 9))
// console.log('first', bestCoordinate([[1,2,13],[2,1,7],[0,1,9]], 2))
/* console.log(
  "first",
  bestCoordinate(
    [
      [1, 2, 5],
      [2, 1, 7],
      [3, 1, 9],
    ],
    2
  )
);
 */

// console.log(
//   "first",
//   bestCoordinate(
//     [
//       [2, 1, 9],
//       [0, 1, 9],
//     ],
//     2
//   )
// );
// @lc code=end
