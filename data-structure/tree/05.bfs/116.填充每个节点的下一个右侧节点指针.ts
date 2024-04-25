/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

class TNode {
  val: number;
  left: TNode | null;
  right: TNode | null;
  next: TNode | null;
  constructor(val?: number, left?: TNode, right?: TNode, next?: TNode) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: TNode | null): TNode | null {
  if (!root) return root;
  
  let queue: TNode[] = []
    queue.push(root);
    
    while(queue.length) {
        const tmp: TNode[] = Array.from(queue);
        const len = queue.length;

        for(let i = 0; i < len; i++) {
            const node = queue.shift()!;
            node.next = tmp[i + 1];
            const {left, right} = node;
            if(left) queue.push(left);
            if(right) queue.push(right);
        }
    }

  return root;
}
// @lc code=end
