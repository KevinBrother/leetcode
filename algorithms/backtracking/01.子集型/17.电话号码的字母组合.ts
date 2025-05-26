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
  if(!digits) {
    return rst;
  }

  const path: string[] = [];
  
  function dfs(i) {
    
    if(i === digits.length) {
      rst.push(path.join(''));
      return; 
    }
    
    const curStr = phoneArr[digits[i]]
    for (let index = 0; index < curStr.length; index++) {
      path.push(curStr[index]);
      dfs(i + 1)
      path.pop();

      //   path[i] = c;
      //   dfs(i + 1);
    }
  }

  dfs(0)

  return rst;
}

console.log("first", letterCombinations("23"));
// @lc code=end
