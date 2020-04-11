import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TitleScreen } from '../title';
import { BoardContainer } from '../board';
import { ResultsScreen } from '../results';

export enum Screens {
  Title = 'TITLE',
  Game = 'GAME',
  Results = 'RESULTS',
}

const Stack = createStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator initialRouteName="title">
      <Stack.Screen name={Screens.Title} component={TitleScreen} />
      <Stack.Screen name={Screens.Game} component={BoardContainer} />
      <Stack.Screen name={Screens.Results} component={ResultsScreen} />
    </Stack.Navigator>
  );
};
