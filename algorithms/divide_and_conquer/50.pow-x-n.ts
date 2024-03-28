/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start

// 2的 10 次方 等于 2的1 =》 2的2 =》 2的4 =》 2的8 =》 乘上 2的2
function divide(x: number, n: number) {
    if(n === 0) {
        return 1;
    }

    if(n === 1) {
        return x;
    }

    let y = divide(x, Math.floor(n / 2))
    return n % 2 === 0 ? y * y :  y * y * x;

}

function myPow(x: number, n: number): number {

    return  n < 0 ? 1 / divide(x, -n) : divide(x, n);
}

console.log('myPow(2, 4)', myPow(2, 2))
console.log('myPow(2, 3)', myPow(2, 3))
console.log('myPow(2, 4)', myPow(2, 4))
console.log('myPow(2, 4)', myPow(2, 8))


