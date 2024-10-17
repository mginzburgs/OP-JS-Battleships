import { shipFactory } from "../ship/shipFactory.js";

test("new ship has correct propreties", () => {
  const ship = shipFactory(5);
  expect(ship.length).toBe(5);
  expect(ship.timesHit).toBe(0);
  expect(ship.isSunk).toBe(false);
});

test("ship can be hit and sink", () => {
  const ship = shipFactory(3);
  ship.attack();
  ship.attack();
  ship.attack();
  expect(ship.timesHit).toBe(3);
  expect(ship.isSunk).toBe(true);
});

test("checks ships health", () => {
  const ship = shipFactory(4);
  ship.attack();
  ship.attack();
  ship.attack();
  expect(ship.health()).toEqual([false, 3, 4]);
});
