function recursive(index: number, num: number[], target: number) {
    if(num.length === 1) {
        return num[0];
    }

    while(target > 0) {
        if(index > num.length) {
            index = 0;
        }
        --target;
        ++index;
    }

    num.splice(index, 1);
    return recursive(index+1, num, 4);
}

function iceBreakingGame(num: number, target: number): number {
    const arr = Array.from({length: num}, (v, index) => index);

   return recursive(0, arr, target);
}


// console.log('first', iceBreakingGame(7,4)) // 1
console.log('first', iceBreakingGame(12,5)) // 0

// [0,1,2,3,4] 5,  4, 0。
// 