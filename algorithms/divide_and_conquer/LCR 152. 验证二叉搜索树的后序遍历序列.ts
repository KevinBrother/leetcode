// 后续遍历，最后一个元素为根节点
// 从后往前遇到的第一个比自己小的数left，为左子树的根节点，且 [0, left] 为左子树
// 从后往前找到的第一个比自己大的数right，为右子树的根节点，且 [left + 1, right] 为右子树

function divide(postorder: number[], start, end) {
  if (start >= end) {
    return true;
  }

  let pointer = start;

  while (postorder[pointer] < postorder[end]) {
    pointer++;
  }

  let rightStart = pointer;
  while (postorder[pointer] > postorder[end]) {
    pointer++;
  }

  return (
    pointer === end &&
    divide(postorder, start, rightStart - 1) &&
    divide(postorder, rightStart, end - 1)
  );
}

export function verifyTreeOrder(postorder: number[]): boolean {
  return divide(postorder, 0, postorder.length - 1);
}

console.log('first', verifyTreeOrder([4,6,5,9,8])) ; // true
// console.log("first", verifyTreeOrder([4, 9, 6, 5, 8])); // false
//               4
//          /        \
//         2         6
//       /   \     /   \
//     1      3    5    7
//
//
//     [1,3,2, 5, 7, 6, 4]

// [1, 3, 2]
// [5, 7, 6]

// 4,9,6,5,8]

//  中序：[4, 5, 6, 8, 9]  后序： [4,6,5,9,8]
