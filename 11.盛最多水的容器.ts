/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
    // 对撞指针
    let left = 0, right = height.length-1;
    let result = 0;
    while(left < right) {
        const volume = Math.min(height[left], height[right]) * ( right - left)
        result = Math.max(volume, result); 

        if(height[left] <= height[right]) {
            left++
        }else {
            right--
        }
    }

    return result;
};

console.log('maxArea([1,8,6,2,5,4,8,3,7])', maxArea([1,8,6,2,5,4,8,3,7]))


// @lc code=end

