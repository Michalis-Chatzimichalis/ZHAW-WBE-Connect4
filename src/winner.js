function connect4Winner(player, board) {
  const rows = board.length;
  const cols = board[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] !== player) continue;

      // 1. Horizontal (nach rechts)
      if (
        c + 3 < cols &&
        board[r][c + 1] === player &&
        board[r][c + 2] === player &&
        board[r][c + 3] === player
      ) {
        return true;
      }

      // 2. Vertikal (nach unten)
      if (
        r + 3 < rows &&
        board[r + 1][c] === player &&
        board[r + 2][c] === player &&
        board[r + 3][c] === player
      ) {
        return true;
      }

      // 3. Diagonal (nach unten rechts)
      if (
        r + 3 < rows &&
        c + 3 < cols &&
        board[r + 1][c + 1] === player &&
        board[r + 2][c + 2] === player &&
        board[r + 3][c + 3] === player
      ) {
        return true;
      }

      // 4. Diagonal (nach oben rechts)
      if (
        r - 3 >= 0 &&
        c + 3 < cols &&
        board[r - 1][c + 1] === player &&
        board[r - 2][c + 2] === player &&
        board[r - 3][c + 3] === player
      ) {
        return true;
      }
    }
  }

  return false;
}

// Export für Node.js / Jasmine
if (typeof module !== "undefined" && module.exports) {
  module.exports = { connect4Winner };
}