/*
 * @lc app=leetcode.cn id=498 lang=typescript
 *
 * [498] 对角线遍历
 */

// @lc code=start
function findDiagonalOrder(mat: number[][]): number[] {
  const result = [];
// 一共要遍历的次数 
  const width = mat[0].length;
  const height = mat.length; 
  const totalLength = width + height - 1;
  let x = 0, y = 0;
  for(let i = 0; i < totalLength; i++) {
    if(i % 2 === 0) {
      // i为 偶数，从右上到左下
        // 当小于等于对角线的次数时，x坐标初始值 = 0，y = i
        // 当大于对角线的次数时，x = i - height + 1, y height - 1
        if(i < height) {
          x = i ; y = 0;
        }else {
          x = height - 1; y = i - height + 1;
        }

        while( y < width && x >= 0) {
            // @ts-ignore
            result.push(mat[x][y]);
            x -= 1;
            y += 1;
        }

      }else {
      // i为 奇数，从左下到右上
        // 当小于等于对角线的次数时，x坐标初始值 = 0，y = i
        // 当大于对角线的次数时，x = i - height + 1, y height - 1
        if( i < width) {
          x = 0; y = i;
        }else {
          // x = i - width + 1; y = width - 1;
          x =i - width + 1; y = width - 1;
        }

        while(y >=0 && x < height) {
          // @ts-ignore
          result.push(mat[x][y]);
          x += 1;
          y -= 1;
        }
    }
  }

  return result;
};
// @lc code=end

// console.log('[[1,2,3],[4,5,6],[7,8,9]]', findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]));
// console.log('[[1,2],[3,4]]', findDiagonalOrder([[1,2],[3,4]]));
// console.log('[[3],[2]]', findDiagonalOrder([[3],[2]]));
console.log('[[6,9,7]]', findDiagonalOrder([[6,9,7]]));
