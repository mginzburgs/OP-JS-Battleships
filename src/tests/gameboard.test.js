import { gameBoardFactory } from "../gameBoard/gameboardFactory";
import { shipFactory } from "../ship/shipFactory";
import { shipMovementService } from "../ship/shipMovementService";

test("creates 2 by 2 game board ", () => {
  const expectedBoard = {
    board: [
      [
        { coords: [0, 0], ship: "empty" },
        { coords: [0, 1], ship: "empty" },
      ],
      [
        { coords: [1, 0], ship: "empty" },
        { coords: [1, 1], ship: "empty" },
      ],
    ],
  };

  const gameBoard = gameBoardFactory(2);
  expect(gameBoard.board).toEqual(expectedBoard.board);
});

test("places a ship", () => {
  const gameboard = gameBoardFactory(3);
  const ship = shipFactory(3);

  gameboard.place(ship, [0, 0], "horizontal");

  expect(gameboard.board[0][0].ship).toEqual(ship);
  expect(gameboard.board[0][1].ship).toEqual(ship);
  expect(gameboard.board[0][2].ship).toEqual(ship);
});

test("check if ship is placed correctly", () => {
  const gameBoard = gameBoardFactory(3);
  const ship = shipFactory(2);

  gameBoard.place(ship, [0, 0], "horizontal");

  expect(() => {
    gameBoard
      .place(ship, [2, 2], "horizontal")
      .toThrow("You can not place your ship here, field does not exist");
  });
});

test("gameboard receives missed hit", () => {
  const gameBoard = gameBoardFactory(3);
  const ship = shipFactory(1);
  gameBoard.place(ship, [1, 1], "horizontal");

  gameBoard.makeMove([0, 0]);
  gameBoard.makeMove([0, 1]);
  expect(gameBoard.moves).toEqual([
    [0, 0],
    [0, 1],
  ]);
});

test("gameboard ship receives a hit", () => {
  const gameBoard = gameBoardFactory(3);
  const ship = shipFactory(1);
  gameBoard.place(ship, [1, 1], "horizontal");
  gameBoard.makeMove([1, 1]);
  expect(gameBoard.hits).toEqual([[1, 1]]);
});

test("all ships have been sunk", () => {
  const gameBoard = gameBoardFactory(3);
  const ship = shipFactory(1);
  const ship2 = shipFactory(1);
  const ship3 = shipFactory(1);
  gameBoard.place(ship, [1, 1], "horizontal");
  gameBoard.place(ship2, [2, 2], "horizontal");
  gameBoard.place(ship3, [0, 0], "horizontal");
  gameBoard.makeMove([1, 1]);
  gameBoard.makeMove([2, 2]);
  gameBoard.makeMove([0, 0]);
  expect(gameBoard.ships.every((ship) => ship.isSunk)).toEqual(true);
});
