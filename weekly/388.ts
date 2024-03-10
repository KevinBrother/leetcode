// https://leetcode.cn/contest/weekly-contest-388/

// 100233 重新分装苹果

function minimumBoxes(apple: number[], capacity: number[]): number {
    let sum = apple.reduce((pre, cur) => {
        return pre + cur;
    }, 0)

    const big2small =capacity.sort((a, b) => {
        return b - a; 
    })

    let result = 0;
    while(big2small.length - result > 0 && sum > 0) {
        sum = sum - big2small[result];
        result++
    }

    return result;
};


// 100247. 幸福值最大化的选择方案
function maximumHappinessSum(happiness: number[], k: number): number {
    const big2small =happiness.sort((a, b) => {
        return b - a; 
    })

    let result = 0;
    for(let i = 0; i < k; i++) {
        const cur = big2small[i] - i
        result = result + ( cur > 0 ? cur: 0 );
    }

    return result;
}; 

// 100251. 数组中的最短非公共子字符串

function shortestSubstrings(arr: string[]): string[] {
    let map = new Map<string, Set<Number>>();
    let result = new Array(arr.length).fill('');
    
    for(let i = 0; i < arr.length; i++) {
        sliceString(arr[i], i);
    }

    setValue(map);

    return result;

    function sliceString(str: string, index: number) {
        let len = str.length;
        for(let i = 0; i < len; i++) {
            let j = i + 1;
            while(j <= len) {
                const subStr = str.slice(i, j);
                const mapValue = map.get(subStr);
                if(mapValue) {
                    mapValue.add(index);
                }else {
                    const set = new Set<number>();
                    set.add(index);
                    map.set(subStr, set);
                }
                j++;
            }
        }
    }

    function setValue(map: Map<string, Set<Number>>) {
        const sortedArray = Array.from(map).sort(([keyA], [keyB]) => {
            if (keyA.length === keyB.length) {
              return keyA.localeCompare(keyB); // 按照字符的 ASCII 码排序
            } else {
              return keyA.length - keyB.length; // 按键的长度排序
            }
          });
          
        sortedArray.forEach(([key, value]) => {
            if(value.size === 1) {
                let index = [...value][0];
                // @ts-ignore
                if(!result[index]) {
                    // @ts-ignore
                    result[index] = key;
                }
            }
        })
    }
};

console.log('first',  shortestSubstrings(["cab","ad","bad","c"]))
console.log('first',  shortestSubstrings(["abc","bcd","abcd"]))
console.log('first',  shortestSubstrings(["vbb","grg","lexn","oklqe","yxav"]))