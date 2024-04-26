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
  let result: string[] = [];
  let path: string[] = [];

  let n = digits.length;

  if(n === 0) {
    return []
  }

  function dfs(i) {
    if (i === n) {
      result.push(path.join(''));
      return;
    }

    for (let c of phoneArr[Number(digits[i])]) {
      path.push(c);
      dfs(i + 1);
      path.pop();
    //   path[i] = c;
    //   dfs(i + 1);
    }
  }

  dfs(0);

  return result;
}

console.log("first", letterCombinations("23"));
// @lc code=end
