// console.log('first', buildTree([3,9,20,15,7],  [9,3,15,20,7]))

// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

//      3 
//     /  \
//   9     20
//         / \
//        15  7 



// console.log('first', constructFromPrePost([1,2,4,5,3,6,7], [4,2,5,1,6,3,7]))
//       1 
//      /  \
//    2     3
//   / \    / \
//  4   5  6   7 

import { levelOrder } from "../05.bfs/102.二叉树的层序遍历";
import { bfs } from "../05.bfs/bfs";
import { buildTree } from "../105.从前序与中序遍历序列构造二叉树";

let root1 = buildTree([3,9,20,15,7],  [9,3,15,20,7]);
let root2 = buildTree([1,2,4,5,3,6,7], [4,2,5,1,6,3,7])

// console.log('bfs(root)', bfs(root1));
console.log('levelOrder(root)', levelOrder(root2));





