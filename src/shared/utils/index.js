/**
 * Write a helper function
 * For Calcucate Winner
 * @param {Array} squares
 * @returns {string}
 */
export function calculateWinner(squares = []) {
    // Declare combination list for find the winner
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    /**
     * Checking params type
     *  @if not array type,
     * then will not continue further
     */
    if (!Array.isArray(squares)) {
        new Error(`Expected Array, Got ${typeof squares}`);
        return;
    }

    /**
     * Checking is the param valid and param is not empty.
     * Find the combination
     */
    if (squares && squares.length) {
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    } else {
        return new Error(`Param Can not be an empty array`);
    }
}
