// https://leetcode.cn/contest/weekly-contest-391

function sumOfTheDigitsOfHarshadNumber(x: number): number {
  let sum = 0;
  for (let c of String(x)) {
    sum += Number(c);
  }
  return x % sum === 0 ? sum : -1;
}

// 100235. 换水问题 II https://leetcode.cn/contest/weekly-contest-391/problems/water-bottles-ii/

function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  let empty = 0;
  let rst = 0;
  while(empty > numExchange || numBottles !== 0) {
    rst += numBottles;
    empty += numBottles;
    numBottles = 0;

    if(empty >= numExchange) {
      numBottles +=1;
      empty -= numExchange; 
      numExchange += 1;
    }
  }

  return rst;
};

// console.log('maxBottlesDrunk', maxBottlesDrunk(13, 6))
// console.log('maxBottlesDrunk', maxBottlesDrunk(10, 3))

// https://leetcode.cn/contest/weekly-contest-391/problems/count-alternating-subarrays/
// 100266. 交替子数组计数
// function countAlternatingSubarrays(nums: number[]): number {
//   let sum: number[][] = [];
//   let path: number[] = [];

//   function dfs(i, curIndex) {
//     if (i === nums.length) {
//       sum.push([...path]);
//       return;
//     }

//     // 遍历整个数字，需要记录当前是数字的第几个
//     for (let j = curIndex; j < nums.length; j++) {
//       let cur = nums[j];
//       if (path.length > 0 && path[path.length - 1] !== cur) {
//         path.push(cur);
//         sum.push([...path]);
//       }
//       dfs(i + 1, i + 1);
//       path = [];
//     }
//   }

//   dfs(0, 0);
//   console.log("sum", sum);

//   return sum.length;
// }

function countAlternatingSubarrays(nums: number[]): number {
  let rst = nums.length;
  let left = 0, right = 0;
  let path:number[] = [];
  while(left < nums.length -1) {
    let cur = nums[right];

    if (path.length > 0 && path[path.length - 1] === cur || right === nums.length) {
      let div = right - left;
      rst += sumOfSequence(div) - div;
      left = right;
      path = [];
      continue;
    }
    ++right;
    path.push(cur);
  }
  return rst;
}


function sumOfSequence(x){
  return x *(1 + x) / 2
}


console.log("countAlternatingSubarrays", countAlternatingSubarrays([0, 1, 1, 1]));
// console.log("first", countAlternatingSubarrays([1,0,1,0]));
