/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates2(s: string): string {
    const resultStack: string[] = [];
    for(let i  = 0; i < s.length; i++) {
        const char = s[i];
        if(resultStack.length && resultStack[resultStack.length - 1] === char) {
            resultStack.pop();
        }else {
            resultStack.push(char);
        }
    }
    return resultStack.join('')
};

console.log('remove', removeDuplicates2('abbaca'))
// @lc code=end

