export const shipUtilities = (ship) => ({
  health() {
    return [ship.isSunk, ship.timesHit, ship.length];
  },
});
