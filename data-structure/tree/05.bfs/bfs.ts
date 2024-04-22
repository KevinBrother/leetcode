import { TreeNode } from "../../../util/listNode";

export function bfs_not_good(root: TreeNode | null): number[] {
  if (root === null) return [];
  const rst: number[] = [];
  let queue: TreeNode[] = [];
  queue.push(root);
  if (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      if (node) {
        rst.push(node.val);
      }
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }
  }
  return rst;
}

export function bfs(root: TreeNode | null): number[] {
  if (root === null) return [];
  const rst: number[] = [];
  let queue: TreeNode[] = [];
  queue.push(root);

  for (let { val, left, right } of queue) {
    rst.push(val);
    if (left) queue.push(left);
    if (right) queue.push(right);
  }
  
  return rst;
}
