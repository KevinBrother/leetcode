/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {

    let rst: number[][] = [];
    let path: number[] = [];
    let len = nums.length;

    function dfs(i) {
        if(i === len) {
            rst.push([...path]);
            return;
        }

        // 不选, 直接递归
        dfs(i + 1);

        // 选，先操作，在递归
        path.push(nums[i])
        dfs(i+1)

        // 恢复现场，递归之前是什么样，递归之后也应该是什么样的
        path.pop();

    }

    dfs(0);

    return rst;
};

console.log("🚀 ~ subsets ~ subsets:", subsets([1,2]))

// @lc code=end

