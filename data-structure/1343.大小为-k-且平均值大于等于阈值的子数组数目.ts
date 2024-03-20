/*
 * @lc app=leetcode.cn id=1343 lang=typescript
 *
 * [1343] 大小为 K 且平均值大于等于阈值的子数组数目
 */

// @lc code=start
function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let result = 0;
    let left = 0, right = k;
    let sum = arr.slice(left, right).reduce((pre, cur) => {
        return pre + cur;
    }, 0)

    do {
        const avg = sum / k;
        if(avg >= threshold) result++;
        
        sum = sum - arr[left] + arr[right]
        left++;
        right++;
    }while(right <= arr.length);

    return result;
};


console.log('first', numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4))
console.log('first', numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5))

// @lc code=end

