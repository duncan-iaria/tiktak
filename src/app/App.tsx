import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components';

import { Router } from './Router';
import { GameStateProvider } from '../board';

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
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <AppBackground>
        <AppContainer>
          <GameStateProvider>
            <Router />
          </GameStateProvider>
        </AppContainer>
      </AppBackground>
    </NavigationContainer>
  );
};

export default App;
