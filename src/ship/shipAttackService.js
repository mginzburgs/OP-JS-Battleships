export const shipAttackService = (ship) => ({
  attack() {
    ship.timesHit += 1;
    // console.log("BOOM ! You hit an Enemy !");
    if (ship.timesHit >= ship.length) {
      ship.isSunk = true;
      // console.log("DESTROYED ! You sank that bastards !");
    }
  },
});
