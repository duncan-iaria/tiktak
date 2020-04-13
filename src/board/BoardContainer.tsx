import React, { useContext } from 'react';
import { ImageBackground } from 'react-native';
import styled from 'styled-components';

import { ScreenContainer } from '../common';
import { gameStateStore, GameState } from './GameStateStore';
import { BoardColumn } from './BoardColumn';
import { PlayerLabel } from './PlayerLabel';
import { GameController } from './GameController';

const boardImage = require('../../assets/images/tik-tak-board-01.png');

const BoardBackground = styled(ImageBackground)`
  background-color: white;
  flex-direction: row;
  flex: 8;
  justify-content: center;
`;

export const BoardContainer = ({ navigation }: any) => {
  const {
    state: { boardState, gameState },
  } = useContext(gameStateStore);

  return (
    <GameController navigation={navigation}>
      <ScreenContainer>
        <PlayerLabel
          label={
            gameState === GameState.Player2 ? "Player O's Turn" : 'Player O'
          }
          isActive={gameState === GameState.Player2}
          isFlipped={true}
        />
        <BoardBackground resizeMode="cover" source={boardImage}>
          {boardState.map((tempColumn, index) => {
            return (
              <BoardColumn
                key={`column-${index}`}
                column={tempColumn}
                columnIndex={index}
              />
            );
          })}
        </BoardBackground>
        <PlayerLabel
          label={
            gameState === GameState.Player1 ? "Player X's Turn" : 'Player X'
          }
          isActive={gameState === GameState.Player1}
        />
      </ScreenContainer>
    </GameController>
  );
};
