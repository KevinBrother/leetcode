export function subsets(nums: number[]): number[][] {
    const rst: number[][] = [];
    const path: number[] = [];
    const num_len = nums.length;


    function dfs(i) {
        rst.push([...path]);
        // if(i === num_len) {
        //     return;
        // }
        for(let j = i; j < num_len; j++) {
            path.push(nums[j]);
            dfs(j+1);
            path.pop();
        }
    }

    dfs(0);

    return rst;
}

const nums = [1,2,3]

console.log(subsets(nums));