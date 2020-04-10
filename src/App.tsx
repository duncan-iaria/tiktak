import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import styled from 'styled-components';

import { BoardContainer, PlayerLabel, GameStateProvider } from './board';

const AppContainer = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
`;

const AppBackground = styled(View)`
  flex: 1;
  background-color: white;
  flex-direction: column;
`;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppBackground>
        <AppContainer>
          <GameStateProvider>
            <PlayerLabel label="Player 1" isActive={true} isFlipped={true} />
            <BoardContainer />
            <PlayerLabel label="Player 2" isActive={false} />
          </GameStateProvider>
        </AppContainer>
      </AppBackground>
    </>
  );
};

export default App;
