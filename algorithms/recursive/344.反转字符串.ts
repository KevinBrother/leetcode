/*
 * @lc app=leetcode.cn id=344 lang=typescript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */

function recursive(left, right, s: string[]) {
    if(left >= right) {
        return;
    }

    // 处理逻辑
    ++left;
    --right;
    recursive(left, right, s)
}

function reverseString(s: string[]): void {
    
    function recursive(left, right, s: string[]) {
        if(left >= right) {
            return;
        }
    
        [s[left], s[right]] = [s[right], s[left]]; 
        ++left;
        --right;
        recursive(left, right, s)
    }

    recursive(0, s.length-1, s);
};
// @lc code=end

