import React, { useContext } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import { gameStateStore } from './GameStateStore';
import { BoardColumn } from './BoardColumn';
import { PlayerLabel } from './PlayerLabel';

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
    <>
      <PlayerLabel label="Player 1" isActive={true} isFlipped={true} />
      <Board>
        {boardState.map((tempColumn, index) => {
          return (
            <BoardColumn
              key={`column-${index}`}
              column={tempColumn}
              columnIndex={index}
            />
          );
        })}
      </Board>
      <PlayerLabel label="Player 2" isActive={false} />
    </>
  );
};
