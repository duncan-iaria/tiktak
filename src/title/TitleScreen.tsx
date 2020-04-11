import React from 'react';
import { View, Text } from 'react-native';

import { Screens } from '../app';
import { Button } from '../common';

export const TitleScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>TikTak</Text>
      <Button
        activeOpacity={0.9}
        onPress={() => navigation.navigate(Screens.Game)}
      >
        <Text>Let's Play</Text>
      </Button>
      <View style={{ height: 12 }} />
      <Button
        activeOpacity={0.9}
        onPress={() => navigation.navigate(Screens.Results)}
      >
        <Text>Results Test</Text>
      </Button>
    </View>
  );
};
