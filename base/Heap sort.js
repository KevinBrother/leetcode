function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    // 比较根节点与左子节点
    if (left < n && arr[i] < arr[left]) {
      largest = left;
    }
  
    // 比较当前最大值与右子节点
    if (right < n && arr[largest] < arr[right]) {
      largest = right;
    }
  
    // 如果最大值不是根节点，则交换根节点与最大值
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
  
      // 对被交换的子树进行堆化
      heapify(arr, n, largest);
    }
  }
  
  function heapSort(arr) {
    const n = arr.length;
  
    // 构建最大堆（初始堆化）
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // 逐个取出堆顶元素，与当前堆的末尾元素交换，并重新堆化
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  // 示例用法
  const arr = [7, 2, 8, 1, 4, 9, 5, 3];
  const sortedArr = heapSort(arr);
  console.log(sortedArr);