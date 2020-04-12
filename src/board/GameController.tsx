import { useContext, useEffect } from 'react';

import { gameStateStore, BoardStateType, GameAction } from './GameStateStore';
import { Screens } from '../common';

export const GameController = ({
  children,
  navigation,
}: {
  children: any;
  navigation: any;
}) => {
  const {
    state: { boardState },
    dispatch,
  } = useContext(gameStateStore);

  const evaluateBoard = () => {
    if (boardState) {
      evaulateRows();
      evaluateColumns();
      evaluateDiagonals();
      evaluateDraw();
    }
  };

  const evaulateRows = () => {
    const rowLength = boardState[0].length;

    // think this could be a map prolly
    for (let i = rowLength - 1; i >= 0; --i) {
      const tempRow = boardState.map((tempColumn) => tempColumn[i]);
      const tempWinner =
        checkAllVals(tempRow, BoardStateType.X) ||
        checkAllVals(tempRow, BoardStateType.O);

      if (tempWinner) {
        endGame(tempWinner);
      }
    }
  };

  const evaluateColumns = () => {
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
  };

  const evaluateDiagonals = () => {
    const diag1 = boardState.map((tempColumn, index) => tempColumn[index]);

    const diag2 = boardState.map(
      (tempColumn, index) => tempColumn[tempColumn.length - 1 - index]
    );

    // refactor this ugliness
    const tempWinner =
      checkAllVals(diag1, BoardStateType.X) ||
      checkAllVals(diag1, BoardStateType.O) ||
      checkAllVals(diag2, BoardStateType.X) ||
      checkAllVals(diag2, BoardStateType.O);

    if (tempWinner) {
      endGame(tempWinner);
    }
  };

  const evaluateDraw = () => {
    const allBoardValues = boardState.reduce((accumulator, tempColumn) => {
      return [...accumulator, ...tempColumn.map((tempVal) => tempVal)];
    }, []);

    const isDraw = !allBoardValues.some(
      (tempValue) => tempValue === BoardStateType.None
    );

    if (isDraw) {
      endGame(BoardStateType.None);
    }
  };

  const checkAllVals = (values: BoardStateType[], type: BoardStateType) => {
    if (values.every((value) => value === type)) {
      return type;
    }

    return null;
  };

  const endGame = (winner: BoardStateType) => {
    dispatch({ type: GameAction.ResetGameBoard, payload: null });
    navigation.navigate(Screens.Results, { winner });
  };

  useEffect(() => {
    evaluateBoard();
  });

  return children;
};
