/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    // 二分法，找到目标元素后，可能左边有，可能右边也有，所以需要递归
    let left = 0, right = nums.length-1;
    
    let [leftIndex, rightIndex] = getAside(left, right, target, nums);
    if(leftIndex < 0 || rightIndex < 0 || leftIndex > rightIndex) {
        leftIndex = rightIndex = -1;
        
    }
    return [leftIndex, rightIndex]
};

function getAside(left: number, right:number, target: number, nums: number[]): [number, number] {

    while(left <= right) {
        const middle = Math.floor((left + right)/2);
        if(target == nums[middle]) {
            const [minLeft, minRight] = getAside(left, middle -1, target, nums);
            const [maxLeft, maxRight] = getAside(middle +1 , right, target, nums);
            return [minLeft, maxRight];
        }else if(target > nums[middle]) {
            left = middle + 1
        }else {
            right = middle - 1
        }
    }

    return [left, right]    
}

// console.log('expect [3,4 ]',searchRange([5,7,7,8,8,10],8))
// console.log('expect [-1, -1 ]',searchRange([5,7,7,8,8,10],6))
// console.log('expect [-1, -1 ]',searchRange([],0))

// @lc code=end

