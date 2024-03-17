// https://leetcode.cn/contest/weekly-contest-389

// 100248. 字符串及其反转中是否存在同一子字符串
function isSubstringPresent(s: string): boolean {
    const map = {};

    for(let i = 0; i < s.length-1; i++) {
        let str = s[i] + s[i+1];
        map[str] = true;
    }

    const reverseStr = s.split('').reverse();

    for(let i = 0; i < reverseStr.length-1; i++) {
        let str = reverseStr[i] + reverseStr[i+1];
        if(map[str]) {
            return true
        }
    }

    return false;
};

// 100236. 统计以给定字符开头和结尾的子字符串总数

// a : 1, aa: 3, aaa: 6, aaaa: 10
// 每个后续的数字都是前一个数字加上一个递增的常数
function countSubstrings(s: string, c: string): number {
    // 二进制的和
    let count = 0;
    for(let i of s){
        if(c === i) {
            count++;
        }
    }

  // 二进制的和
    let result = 0;
    for(let i = 0;  i < count; i++) {
        result += i + 1;
    }
    return result;
};

// 100255. 成为 K 特殊字符串需要删除的最少字符数

function minimumDeletions(word: string, k: number): number {
    // 找到所有数字的map
    
    // 策略 
    // k = 0,  6,1 删 5， 
    // aabcaba   a: 4, b:2,c 1 k = 0;
    // 
};