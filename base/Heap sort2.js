// 某二叉树节点 n（非叶子结点）的左子节点下标为 2n+1,右子节点下标 为 2n+2
// 某二叉树节点（非根节点）的father节点下标为 Math.floor((n-1)/2)

    //     9
    //   8   5
    // 1  2 3    

// 构建最大堆（初始堆化）
// （非叶子结点）的左子节点下标为2n+1, 右子节点下标为2n+2
/**
 * 
 * @param {*} arr 
 * @param {*} i 当前下标
 */
function heapify(arr, i) {
  while(i > 0) {
    if(arr[i] > arr[Math.floor((i-1)/2)]) {
      [arr[i], arr[Math.floor((i-1)/2)]] = [arr[Math.floor((i-1)/2)], arr[i]];
    }
    i--;
  }
}

function heapSort(arr) {
  const n = arr.length - 1;
  // 先构建堆顶，然后替换堆顶与最后一个元素，然后重新构建堆顶
  for(let i = n; i > 0; i--) {
    heapify(arr, i);
    [arr[0], arr[i]] = [arr[i], arr[0]];
  }

}


const arr = [8,9,1,2,3,14,5];
// heapify(arr, 6)
heapSort(arr);
console.log(arr);