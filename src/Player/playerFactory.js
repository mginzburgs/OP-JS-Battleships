const playerFactory = (type, gameboard) => {
  const player = {
    type,
    gameboard,
  };

  return player;
};

export { playerFactory };
