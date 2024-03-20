/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses(s: string): number {
    const stack: string[] = [];
    let isContinue = false;
    let result = 0;
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(stack.length > 0 && stack[0] === '(' && char === ')') {
            stack.shift();
            if(isContinue) {
                result += 2
            }else {
                Math.max(result)
            }
             isContinue = true;
        }else {
            stack.unshift(char);
            isContinue = false;
        }
    }
    return result;
};

/* 
function longestValidParentheses(s: string): number {
    const stack: string[] = [];
    let isContinue = true;
    let result = 0;
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(stack.length > 0 && stack[0] === '(' && char === ')') {
            stack.shift();
            if(isContinue) {
                result += 2
            }else {
                Math.max(result, 2);
            }
             isContinue = true;
                }else {
                isContinue = false;
                stack.unshift(char);
            }
    }
    return result;
}; */

// console.log('lo', longestValidParentheses("(()"));
// console.log('lo', longestValidParentheses(")()())"));
console.log('lo', longestValidParentheses("()(()"));

// @lc code=end

