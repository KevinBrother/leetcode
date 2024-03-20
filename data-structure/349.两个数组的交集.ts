/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
       

    return getIntersection(nums1.sort((x,y) => x - y) , nums2.sort((x,y) => x -y) );
    
};

function getIntersection(nums1: number[], nums2: number[]) {

    if(nums1.length > nums2.length) {
        return getIntersection(nums2, nums1)
    };

    const result: number[] = [];
    let nums1Point = 0, nums2Point = 0; 
    while(nums1Point < nums1.length && nums2Point < nums2.length) {
        const num1 = nums1[nums1Point];
        const num2 = nums2[nums2Point];
        if(num1 === num2) {
            if(!result.length || num1 !== result[result.length-1]) {
                result.push(num1)
            }
            nums1Point++;
            nums2Point++;
        }else if(num1 < num2) {
            nums1Point++;
        }else {
            nums2Point++
        }
    }
    return result;
}

/* 
 *  哈希集合
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
} */

// console.log('intersection(nums1 = [1,2,2,1], nums2 = [2,2])', intersection( [1,2,2,1], [2,2]))
// console.log('intersection(nums1 = [1,2,2,1], nums2 = [2,2])', intersection( [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81], [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]))

// @lc code=end

