// console.log('first', buildTree([3,9,20,15,7],  [9,3,15,20,7]))

// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

//      3 
//     /  \
//   9     20
//         / \
//        15  7 

import { levelOrder } from "../05.bfs/102.二叉树的层序遍历";
import { bfs } from "../05.bfs/bfs";
import { buildTree } from "../105.从前序与中序遍历序列构造二叉树";

let root = buildTree([3,9,20,15,7],  [9,3,15,20,7]);

// console.log('bfs(root)', bfs(root));

console.log('levelOrder(root)', levelOrder(root))


