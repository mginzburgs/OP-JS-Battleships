import { playerFactory } from "../Player/playerFactory";
import { gameBoardFactory } from "../gameBoard/gameboardFactory";

test("player created", () => {
  const player = playerFactory("real", {});
  expect(player).toEqual({
    type: "real",
    gameboard: {},
  });
});

test("player has gameboard", () => {
  const board = gameBoardFactory(2);
  const player = playerFactory("real", board);
  expect(player).toEqual({
    type: "real",
    gameboard: board,
  });
});
