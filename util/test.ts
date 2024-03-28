import {BST2LinkList} from './listNode'
import { buildTree } from '../data-structure/tree/105.从前序与中序遍历序列构造二叉树'


 const BST = buildTree([7,3, 15, 9, 20], [3, 7, 9, 15, 20])

 const result = BST2LinkList(BST)

console.log('first', result) ;