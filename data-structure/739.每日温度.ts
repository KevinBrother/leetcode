/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */


// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = new Array(temperatures.length).fill(0);
    const stack: number[] = [];
    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length && temperatures[stack[stack.length-1]]  < temperatures[i]) {
            let index = stack.pop()!;
            result[index] = i - index;
        }
        stack.push(i);
    }

    return result;
};

console.log('first', dailyTemperatures([73,74,75,71,69,72,76,73]))
console.log('first', dailyTemperatures([30,40,50,60]))
// @lc code=end

