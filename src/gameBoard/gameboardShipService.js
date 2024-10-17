export const shipPlacementService = (gameboard) => ({
  place(ship, coords, direction) {
    const [startRow, startColumn] = coords;

    for (let i = 0; i < ship.length; i++) {
      if (direction === "horizontal") {
        if (
          !gameboard.board[startRow] ||
          !gameboard.board[startRow][startColumn + i]
        ) {
          throw new Error(
            "You cannot place your ship here, field does not exist"
          );
        }

        gameboard.board[startRow][startColumn + i].ship = ship;
        gameboard.ships.push(ship);
      }

      if (direction === "vertical") {
        if (
          !gameboard.board[startRow + i] ||
          !gameboard.board[startRow + i][startColumn]
        ) {
          throw new Error(
            "You cannot place your ship here, field does not exist"
          );
        }

        gameboard.board[startRow + i][startColumn].ship = ship;
        gameboard.ships.push(ship);
      }
    }
  },
});
