import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from '../common';
import { Router } from './Router';
import { GameStateProvider } from '../board';

const AppContainer = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
`;

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <ThemeProvider theme={theme}>
        <AppContainer>
          <GameStateProvider>
            <Router />
          </GameStateProvider>
        </AppContainer>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
