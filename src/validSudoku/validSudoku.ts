function isValidSudoku(board: string[][]): boolean {
    const rows = [];
    const cols = [];
    const boxes = [];
    // Create array of sets to store values
    for(let y = 0; y < 9; y++){
        rows.push(new Set());
        cols.push(new Set());
        boxes.push(new Set());
    }

    for(let r = 0; r < 9; r ++){
        for (let c = 0; c < 9; c++){
            const x = board[r][c]
            const boxId = 3 * Math.floor(r/3) + Math.floor(c/3);
            if(cols[c].has(x) || rows[r].has(x) || boxes[boxId].has(x)){
                return false;
            } else if(x !== ".") {
                cols[c].add(x);
                rows[r].add(x);
                boxes[boxId].add(x)
            }
        }
    }

    return true;
};