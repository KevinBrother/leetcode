// 分治算法的归并排序，先拆，拆到最小，再向上排序
// let result: number[] = [];
function mergeSorting(arr: number[]) {
  if (arr.length === 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let arr1 = mergeSorting(arr.splice(0, mid));
  let arr2 = mergeSorting(arr);
  return sort([...arr1], [...arr2]);
}

function sort(arr1: number[], arr2: number[]) {
  let result: number[] = [];
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0] >= arr2[0]) {
      result.push(arr2.shift()!);
    } else {
      result.push(arr1.shift()!);
    }

    if (arr1.length === 0) {
      return result.concat(arr2);
    }
    if (arr2.length === 0) {
      return result.concat(arr1);
    }
  }

  return result;
}

console.log("first", mergeSorting([5, 2, 3, 1]));
// console.log("first", mergeSorting([5, 2,3]));
// const arr1 = [3, 5, 4, 6, 8];
// console.log("first", mergeSorting(arr1));

// console.log("result", result);
