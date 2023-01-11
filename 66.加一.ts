/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start

// digits = [9] => [1, 0]
// digits = [9, 9] => [1, 0, 0]
// digits = [9, 9, 9] = ;
function plusOne(digits: number[]): number[] {
  const length = digits.length;
  if (length === 0) {
    return digits;
  }

  let curIndex = length - 1;
  let curDigits = digits[curIndex];

  if (curDigits !== 9) {
    digits[curIndex] = curDigits + 1;
    return digits;
  }

  // 是否有进一的数据
  let isAdvance = true;

  // 判断下标是否大于等于0，且标识位为true，
  //    判断当前位是否为9，如果是，则当前位变为0，标识符变为true
  //    否则标志位变为false，自己+1；
  //    下标前移一位
  // 退出循环判断标识为是否为true，是则最前一位拼接1
  while (curIndex >= 0 && isAdvance) {
    curDigits = digits[curIndex];
    if (curDigits === 9) {
      digits[curIndex] = 0;
      isAdvance === true;
    } else {
      digits[curIndex] = curDigits + 1;
      isAdvance = false;
    }
    curIndex--;
  }

  if (isAdvance) {
    digits.unshift(1);
  }

  return digits;
}
// @lc code=end
