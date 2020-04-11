import React, { useContext } from 'react';

import { gameStateStore } from './GameStateStore';

export const GameController = ({ children }: { children: React.ReactNode }) => {
  const {
    state: { boardState },
  } = useContext(gameStateStore);

  console.log(boardState);

  return children;
};
