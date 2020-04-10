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
  const { dispatch } = useContext(gameStateStore);

  const onPressed = (tileIndex: number, tileValue: BoardStateType) => {
    if (tileValue) {
      // already has a value, do no action
      return;
    }

    console.log(`hello from ${columnIndex}, ${tileIndex}`);
    dispatch({
      type: GameAction.SetBoardTile,
      payload: {
        x: columnIndex,
        y: tileIndex,
      },
    });
  };
  console.log(column);
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
