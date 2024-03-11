/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303]0 区域和检索 - 数组不可变
 */

// @lc code=start
class NumArray {
    nums: number[];
    constructor(nums: number[]) {
        this.nums = nums;
    }

    sumRange(left: number, right: number): number {
        return this.nums.slice(left, right+1).reduce((pre, cur) => {
            return pre + cur;
        }, 0)
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