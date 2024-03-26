// https://leetcode.cn/contest/weekly-contest-390

// 100245. 每个字符最多出现两次的最长子字符串

function maximumLengthSubstring(s: string): number {
  let result = 0;
  let left = 0,
    right = 0;
  let map = {};

  while (right < s.length) {
    let rCh = s[right];
    let rChCount = map[rCh];
    map[rCh] = rChCount ? ++rChCount : 1;
    right++;

    while (!isMaxTwoChar(map)) {
      let lCh = s[left];
      let lChCount = map[lCh];
      map[lCh] = --lChCount;
      left++;
    }

    result = Math.max(right - left, result);
  }

  function isMaxTwoChar(map) {
    for (const [key, value] of Object.entries(map)) {
      // @ts-ignore
      if (value > 2) {
        return false;
      }
    }

    return true;
  }

  return result;
}

// console.log('first', maximumLengthSubstring("bcbbbcba"))
// console.log('first', maximumLengthSubstring("aaaa"))

// 100228. 执行操作使数据元素之和大于等于 K

function minOperations(k: number): number {
  let minSum = Infinity; // 初始设为正无穷大

  for (let x = 0; x <= k; x++) {
    let y = Math.ceil(k / (x + 1)); // 使用向上取整确保 y 是整数
    let sum = x + y;

    if (sum < minSum) {
      minSum = sum;
    }
  }

  return minSum - 1;
}

// console.log('min', minOperations(12))

function mostFrequentIDs(nums: number[], freq: number[]): number[] {
  let map = {};
  let result: number[] = [];
  for (let i = 0; i < freq.length; ++i) {
    let time = freq[i];
    let num = nums[i];

    // let mapValue = map[num] + time;
    // let value = mapValue > 0 ? mapValue : 0;
    // map[num] = value;

    let initValue = map[num] ? map[num] : 0;
    let mapValue = initValue + time;
    let value = mapValue > 0 ? mapValue : 0;
    map[num] = value;

    result[i] = maxNumber(map);
  }

  function maxNumber(map) {
    let max = 0;
    for (const [key, value] of Object.entries(map)) {
      // @ts-ignore
      max = Math.max(max, value);
    }
    return max;
  }

  return result;
}


// console.log('first', mostFrequentIDs([2,3,2,1],
//     [3,2,-3,1]))

 console.log('first', mostFrequentIDs( [5,5,3],  [2,-2,1]))