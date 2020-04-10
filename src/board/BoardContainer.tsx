import React, { useContext } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import { gameStateStore } from './GameStateStore';
import { BoardColumn } from './BoardColumn';

const Board = styled(View)`
  background-color: #333;
  flex-direction: row;
  flex: 6;
`;

export const BoardContainer = ({}) => {
  const {
    state: { boardState },
  } = useContext(gameStateStore);

  return (
    <Board>
      {boardState.map((tempColumn, index) => {
        console.log(tempColumn);
        return (
          <BoardColumn
            key={`column-${index}`}
            column={tempColumn}
            columnIndex={index}
          />
        );
      })}
    </Board>
  );
};
