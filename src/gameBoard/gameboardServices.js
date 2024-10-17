export const gameboardService = (gameboard) => ({
  makeMove(coords) {
    const [row, column] = coords;
    const cell = gameboard.board[row][column];
    switch (typeof cell.ship) {
      case "string":
        gameboard.moves.push(coords);

        break;
      case "object":
        gameboard.board[row][column].ship.attack();
        gameboard.hits.push(coords);
        break;
    }
  },
});
