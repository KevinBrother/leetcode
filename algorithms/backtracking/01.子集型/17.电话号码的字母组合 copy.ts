/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
const phoneArr = [
  "",
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

function letterCombinations(digits: string): string[] {
 
  const rst:string[] = [];
  const path: string[] = [];
  
  function dfs(i) {
    const curStr = phoneArr[digits[i]]
    const len = curStr.length

    if(len === digits.length) {
      rst.push(...path);
      return; 
    }

    for (let index = i; index < len; index++) {
      path.push(curStr[index]);
      dfs(index)
    }

  }

  dfs(0)

  return rst;

}

console.log("first", letterCombinations("23"));
// @lc code=end
