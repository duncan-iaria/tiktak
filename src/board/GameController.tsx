import { useContext, useEffect } from 'react';

import { gameStateStore, BoardStateType, GameAction } from './GameStateStore';
import { Screens } from '../common';

const GAME_WIN_DELAY = 500;
const GAME_DRAW_DELAY = 100;

export const GameController = ({
  children,
  navigation,
}: {
  children: any;
  navigation: any;
}) => {
  const {
    state: { boardState, isGameOver },
    dispatch,
  } = useContext(gameStateStore);

  const evaluateBoard = () => {
    if (boardState && !isGameOver) {
      evaulateRows();
      evaluateColumns();
      evaluateDiagonals();
      evaluateDraw();
    }
  };

  const evaulateRows = () => {
    const rowLength = boardState[0].length;

    for (let i = rowLength - 1; i >= 0; --i) {
      const tempRow = boardState.map((tempColumn) => tempColumn[i]);
      const tempWinner =
        checkForConsistentValues(tempRow, BoardStateType.X) ||
        checkForConsistentValues(tempRow, BoardStateType.O);

      if (tempWinner) {
        endGame(tempWinner);
      }
    }
  };

  const evaluateColumns = () => {
    const tempColumns = boardState.map((tempColumn) => {
      return (
        checkForConsistentValues(tempColumn, BoardStateType.X) ||
        checkForConsistentValues(tempColumn, BoardStateType.O)
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
      checkForConsistentValues(diag1, BoardStateType.X) ||
      checkForConsistentValues(diag1, BoardStateType.O) ||
      checkForConsistentValues(diag2, BoardStateType.X) ||
      checkForConsistentValues(diag2, BoardStateType.O);

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

  const checkForConsistentValues = (
    values: BoardStateType[],
    type: BoardStateType
  ) => {
    if (values.every((value) => value === type)) {
      return type;
    }

    return null;
  };

  const endGame = (winner: BoardStateType) => {
    dispatch({ type: GameAction.SetGameOver, payload: null });

    setTimeout(
      () => {
        navigation.navigate(Screens.Results, { winner });
      },
      winner === BoardStateType.None ? GAME_DRAW_DELAY : GAME_WIN_DELAY
    );
  };

  useEffect(() => {
    evaluateBoard();
  });

  return children;
};
