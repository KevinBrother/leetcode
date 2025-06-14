/**
 * 
 * 
 给你一个正整数 n ，请你返回 n 的 惩罚数 。

n 的 惩罚数 定义为所有满足以下条件 i 的数的平方和：

1 <= i <= n
i * i 的十进制表示的字符串可以分割成若干连续子字符串，且这些子字符串对应的整数值之和等于 i 。
 

示例 1：

输入：n = 10
输出：182
解释：总共有 3 个范围在 [1, 10] 的整数 i 满足要求：
- 1 ，因为 1 * 1 = 1
- 9 ，因为 9 * 9 = 81 ，且 81 可以分割成 8 + 1 。
- 10 ，因为 10 * 10 = 100 ，且 100 可以分割成 10 + 0 。
因此，10 的惩罚数为 1 + 81 + 100 = 182
示例 2：

输入：n = 37
输出：1478
解释：总共有 4 个范围在 [1, 37] 的整数 i 满足要求：
- 1 ，因为 1 * 1 = 1
- 9 ，因为 9 * 9 = 81 ，且 81 可以分割成 8 + 1 。
- 10 ，因为 10 * 10 = 100 ，且 100 可以分割成 10 + 0 。
- 36 ，因为 36 * 36 = 1296 ，且 1296 可以分割成 1 + 29 + 6 。
因此，37 的惩罚数为 1 + 81 + 100 + 1296 = 1478
 

提示：

1 <= n <= 1000

*/


function punishmentNumber(n: number): number{
    let rst = 0;

    for (let index = 1; index <= n; index++) {
        const count = index * index;
        if(validate(index, String(count))) {
            rst += count;
        }
    }

    return rst;
    
};

/**
 * 
 * @param target 9
 * @param count 81 
 * 
 * @returns boolean
 */
function validate(target:number, count: string): boolean {
    const path: number[] = [];

    function dfs(i) {
        if(i === count.length) {
            const sum = path.reduce((pre, cur) =>  pre + cur, 0)

            if(sum === target) {
                // 如何退出递归？
                return true
            }

            return
        }

        let str = '';

        for (let j = i; j < count.length; j++) {
            str += count[j];
            path.push(Number(str));
            // 加判断吗？
            if(dfs(j + 1)) {
                return true;
            }            
            path.pop()
        }
    }

    return dfs(0) || false;
}

console.log(punishmentNumber(37))