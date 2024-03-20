function fileCombination(target: number): number[][] {
  // for(let i = 2; i < target; i++) {

  let result: number[][] = [];
  for (let i = Math.floor(target / 2); i >= 2; i--) {
    let num = Math.floor(target / i);
    let list: number[] = [];
    let count = 0;

    while (count < target) {
      count += num;
      list.push(num);
      ++num;
    }

    if (count === target) {
      result.push(list);
    }
    
  }

  return result;
}
                                                
// console.log("first", fileCombination(18));
console.log("first", fileCombination(100)); // [[9,10,11,12,13,14,15,16],[18,19,20,21,22]]

// x = 1 max = 1
// x = 2 max = 1
// x =3 max = 2
// x = 4 max = 2
// x = 5 max = 2

// x = 6 max = 3

// x = 7 max = 3

// x = 8 max = 3

// x = 10 max = 4

// x / 5
