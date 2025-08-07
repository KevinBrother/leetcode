/*
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。

示例 1：

输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
示例 2：

输入：n = 1, k = 1
输出：[[1]]
 

提示：

1 <= n <= 20
1 <= k <= n

*/

function combine(n: number, k: number): number[][] {
    const rst: number[][] = [];
    // const array = Array.from({length: n}, (_, i) => i + 1);
    const path:number[] = []

    function dfs(i) {
        if(path.length === k) {
            rst.push([...path])
            return;
        }

        for (let j = i; j <= n; j++) {
            // path.push(array[j])
            path.push(j)
            dfs(j + 1);
            path.pop()
        }
    }

    dfs(1);

    return rst;
};

console.log(combine(3, 2))