/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1)    
    const set2 = new Set(nums2)

    return getIntersection(set1, set2);
    
};
function getIntersection(set1: Set<number>, set2: Set<number>) {

    if(set1.size > set2.size) {
        return getIntersection(set2, set1)
    };

    const result: number[] = [];
    for(let num of set1) {
        if(set2.has(num)) {
            result.push(num)
        }
    }

    return result;
}

console.log('intersection(nums1 = [1,2,2,1], nums2 = [2,2])', intersection( [1,2,2,1], [2,2]))

// @lc code=end

