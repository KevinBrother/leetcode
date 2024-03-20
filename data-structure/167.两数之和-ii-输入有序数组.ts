/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    
    // left, right, middle 
    // if middle > target, 则 right = middle -1;
    // else result = target 
    // 双指针
    for(let i = 0; i < numbers.length; i++) {
        let left = i + 1, right = numbers.length-1;

        while( left<=right) {
            let middle = Math.floor((right + left) / 2);

            if(numbers[middle] == target - numbers[i]) {
                return [i + 1, middle + 1];
            }else if(numbers[middle] > target - numbers[i]) {
                right = middle - 1;
            }else {
                left = middle + 1;
            }
        }

    }
    return [-1, -1]

    // 二分法
    // let left = 0, right = numbers.length -1;
    // while(left < right) {
    //     const leftValue = numbers[left];
    //     const rightValue = numbers[right];
    //     if((leftValue + rightValue) === target) {
    //         return [++left, ++right]
    //     } else if(leftValue + rightValue > target) {
    //         right--
    //     }else {
    //         left++
    //     }
    // }
    // return [-1, -1]
    // 
    
};
// console.log('twoSum', twoSum([2, 7, 11, 15, 17, 24], 18))
console.log('twoSum', twoSum([2,3,4], 6))
// console.log('twoSum', twoSum([-1,0], -1))

// @lc code=end

