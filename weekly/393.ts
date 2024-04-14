// https://leetcode.cn/contest/weekly-contest-393

// 100256. 替换字符可以得到的最晚时间

function findLatestTime(s: string): string {
  let [h, m] = s.split(":");

  let [h1, h2] = h;

  if (h1 === "?") {
    if (h2 === "?") {
      h1 = "1";
      h2 = "1";
    } else if (h2 > "1") {
      h1 = "0";
    } else {
      h1 = "1";
    }
  } else {
    if (h2 === "?") {
      if (h1 === "1") {
        h2 = "1";
      } else {
        h2 = "9";
      }
    }
  }

  let [m1, m2] = m;

  if (m1 === "?") {
    m1 = "5";
  }

  if (m2 === "?") {
    m2 = "9";
  }

  return `${h1}${h2}:${m1}${m2}`;
}

// https://leetcode.cn/contest/weekly-contest-393/problems/maximum-prime-difference/

function maximumPrimeDifference(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let leftFlag = false;
  let rightFlag = false;

  while (left < right) {
    if (leftFlag && rightFlag) {
      break;
    }

    let leftNum = nums[left];
    let rightNum = nums[right];

    if (!isPrime(leftNum)) {
      left++;
    } else {
      leftFlag = true;
    }
    if (!isPrime(rightNum)) {
      right--;
    } else {
      rightFlag = true;
    }
  }

  return right - left;
  function isPrime(num) {
    // 检查边界情况
    if (num <= 1) {
      return false;
    }

    // 检查从 2 到 num-1 的所有数字
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        // 如果 num 能被 i 整除，则不是素数
        return false;
      }
    }

    // 如果在循环结束之前没有找到能整除的数，则是素数
    return true;
  }
}

// https://leetcode.cn/contest/weekly-contest-393/problems/kth-smallest-amount-with-single-denomination-combination/
function findKthSmallest(coins: number[], k: number): number {}
