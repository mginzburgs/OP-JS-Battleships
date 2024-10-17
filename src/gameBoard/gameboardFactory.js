import { shipPlacementService } from "./gameboardShipService";
import { gameboardService } from "./gameboardServices";

const gameBoardFactory = (size) => {
  const gameBoard = {};
  gameBoard.moves = [];
  gameBoard.hits = [];
  gameBoard.ships = [];
  gameBoard.board = [];
  for (let row = 0; row < size; row++) {
    gameBoard.board.push([]);
    for (let column = 0; column < size; column++) {
      const cell = {
        coords: [row, column],
        ship: "empty",
      };
      gameBoard.board[row].push(cell);
    }
  }
  Object.assign(
    gameBoard,
    shipPlacementService(gameBoard),
    gameboardService(gameBoard)
  );

  return gameBoard;
};

export { gameBoardFactory };
