/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;

    // x 为外层数组的下标。 0=< x < Math.floor(n / 2)
    // y 为内层数组的下标。 0=< y < Math.floor((n + 1 / 2))
    for(let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < Math.floor(((n + 1) / 2)); j++) {
            // 象限替换
            // 第二象性 (i,j)
            // 第一象性 (j, n - i - 1)
            // 第四象性 (n- i - 1, n - j - 1)
            // 第三象性 (n- j - 1, i)

            const tmp = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][i];
            matrix[n - j - 1][i] = matrix[n- i - 1][n - j - 1];
            matrix[n- i - 1][n - j - 1] = matrix[j][n- i - 1];
            matrix[j][n- i - 1] = tmp;
        }
    }
};

// function rotate(matrix: number[][]): void {
//     const x0 = matrix.length;
//     const y0 = matrix[0].length;
    
//     const x1 = y0, y1 = x0;
    
//     // 创建翻转后的二位数据组，
//     const result = new Array(x1).fill(0).map(() => new Array(y1).fill(0));
//     // matNew[j][x0 - i -1] = matOld[i][j]
//     for(let i = 0; i < x0; i++) {
//         for (let j = 0; j < y0; j++) {
//             result[j][y1 -i -1] = matrix[i][j]
//         }
//     }
//     console.log('result', result)
// };
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix);
console.log('matrix', matrix)