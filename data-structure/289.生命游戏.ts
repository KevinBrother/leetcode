/*
 * @lc app=leetcode.cn id=289 lang=typescript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    // curAlive 的 alives < 2 ，则 自己死亡
    // curAlive 的 alive >= 2 || === 3, 则自己仍然活着
    // curAlive 的 alive > 3, 则自己死亡
    // curDie 的 alive === 3， 则curDie 复活

    const m = board.length;
    const n = board[0].length;
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {

            const point = isAlive(board, i, j, m, n);
            result[i][j] = point;
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
                board[i][j] = result[i][j];
        }
    }
};


function isAlive(board: number[][], i: number, j:number, m:number, n: number): number {
    const cell = board[i][j];

    let count = 0;
    for(let x = i -1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
            if(x === i && y === j) {
                continue;
            }

            if(x >= 0 && x < m && y >= 0 && y < n) {
                if(board[x][y] === 1) {
                    count++;
                }
            }
        }
    }

    if(cell === 1) {

        if(count < 2 || count > 3) {
            return 0;
        }

        return 1;
    }else {
        if(count === 3) {
            return 1;
        }
    }
    return 0;
}

// const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
// gameOfLife(board)
// console.log('board',board)

// @lc code=end

