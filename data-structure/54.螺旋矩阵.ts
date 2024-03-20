/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
    // 遍历的次数通过谁来决定？
    // 四个方向上的边界逐渐减小
    const m = matrix.length;
    const n = matrix[0].length;

    const result:number[] = [];
    let left = 0, right = n - 1, top = 0, bottom = m - 1;
    while(left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        for (let i = top + 1; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        if (left < right && top < bottom) {
            for (let i = right - 1; i > left; i--) {
                result.push(matrix[bottom][i]);
            }
            for (let i = bottom; i > top; i--) {
                result.push(matrix[i][left]);
            }
        }
        left++;
        right--;
        top++;
        bottom--;
    }

    return result;
};
// @lc code=end

