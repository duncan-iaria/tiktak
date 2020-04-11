import { useContext, useEffect } from 'react';

import { gameStateStore, BoardStateType } from './GameStateStore';
import { Screens } from '../app';

export const GameController = ({
  children,
  navigation,
}: {
  children: any;
  navigation: any;
}) => {
  const {
    state: { boardState },
  } = useContext(gameStateStore);

  const evaluateBoard = () => {
    console.log(boardState);
    if (boardState) {
      evaulateRow();
      evaluateColumn();
      evaluateDiagonal();
    }
  };

  const evaulateRow = () => {};

  const evaluateColumn = () => {
    const tempColumns = boardState.map((tempColumn) => {
      return (
        checkAllVals(tempColumn, BoardStateType.X) ||
        checkAllVals(tempColumn, BoardStateType.O)
      );
    });

    const tempWinner = tempColumns.find((tempValue) => tempValue !== null);
    if (tempWinner) {
      endGame(tempWinner);
    }

    console.log('tempColumns: ', tempColumns);
    console.log('winner: ', tempWinner);
  };

  const checkAllVals = (values: BoardStateType[], type: BoardStateType) => {
    if (values.every((value) => value === type)) {
      return type;
    }

    return null;
  };

  const endGame = (winner: BoardStateType) => {
    console.log(winner);
    navigation.navigate(Screens.Results);
  };

  const evaluateDiagonal = () => {};

  useEffect(() => {
    evaluateBoard();
  });

  return children;
};
