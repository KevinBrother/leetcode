/*
 * @lc app=leetcode.cn id=307 lang=typescript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
class NumArray2 {
  nums: number[];
  tree: number[] = [];
  constructor(nums: number[]) {
    this.nums = nums;
    this.tree = new Array(nums.length + 1).fill(0);
    nums.forEach((item, index) => {
      this.add(index + 1, item);
    });
  }

  update(index: number, val: number): void {
    this.add(index + 1, val - this.nums[index]);
    this.nums[index] = val;
  }

  sumRange(left: number, right: number): number {
    return this.prefixSum(right + 1) - this.prefixSum(left);
  }

  add(index: number, val: number) {
    while (index < this.tree.length) {
      this.tree[index] += val;
      index += this.lowBit(index);
    }
  }

  lowBit(i: number) {
    return i & -i;
  }

  prefixSum(index: number) {
    let sum = 0;
    while (index > 0) {
      sum += this.tree[index];
      index -= this.lowBit(index);
    }

    return sum;
  }
}

const numArray = new NumArray2([1, 2,3,4,5,6,7,8]);

let sum = numArray.sumRange(0, 6);
console.log('sum', sum)
numArray.update(0, 2);
sum = numArray.sumRange(0, 7);
console.log('sum', sum)

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end
