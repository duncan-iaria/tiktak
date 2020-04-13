import React, { useContext } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import { BoardStateType, GameAction, gameStateStore } from './GameStateStore';
import { BoardTile } from './BoardTile';

const Column = styled(View)`
  flex: 1;
  flex-direction: column;
`;

interface IProps {
  column: BoardStateType[];
  columnIndex: number;
}

export const BoardColumn = ({ column, columnIndex }: IProps) => {
  const {
    dispatch,
    state: { isGameOver },
  } = useContext(gameStateStore);

  const onPressed = (tileIndex: number, tileValue: BoardStateType) => {
    if (tileValue || isGameOver) {
      // already has a value, do no action or game is already over
      return;
    }

    dispatch({
      type: GameAction.SetBoardTile,
      payload: {
        x: columnIndex,
        y: tileIndex,
      },
    });
  };

  return (
    <Column>
      {column.map((tempBoardTile: BoardStateType, index) => (
        <BoardTile
          key={index}
          tile={tempBoardTile}
          onPress={() => {
            onPressed(index, tempBoardTile);
          }}
        />
      ))}
    </Column>
  );
};
