import { shipAttackService } from "./shipAttackService";
import { shipUtilities } from "./shipUtlilities";
import { shipMovementService } from "./shipMovementService";

function shipFactory(length, gameboard) {
  const ship = {
    length,
    timesHit: 0,
    isSunk: false,
  };

  return Object.assign(ship, shipAttackService(ship), shipUtilities(ship));
}

export { shipFactory };
