/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303]0 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
    sums: number[] = [];
    constructor(nums: number[]) {
        let sum = 0;
        for(let i = 0 ; i < nums.length; i++) {
            sum += nums[i];
            this.sums[i] = sum;
        }
    }

    sumRange(left: number, right: number): number {
        return left === 0 ? this.sums[right] : this.sums[right] - this.sums[left -1]
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end


//      -2 
//     /   \
//    0     3
//   / \   /  \
//  -5  2  -1


//                  -5       
//               /      \
//            -4          -1 
//          /    \       /  \
//       -2       -2    2   -1
//       / \     /  \   
//     -2   0   3   -5  

// 1, 2, 3,

// 1, 3, 6