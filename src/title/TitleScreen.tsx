import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import {
  ButtonWithText,
  H1Text,
  SubTitleText,
  Divider,
  Screens,
} from '../common';

const TitleScreenContainer = styled(View)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const TitleContainer = styled(View)`
  margin-top: 164px;
  align-items: center;
`;

const ButtonContainer = styled(View)`
  width: 256px;
  margin-bottom: 64px;
`;

const SubtitleContainer = styled(View)`
  width: 128px;
  align-items: center;
  justify-content: center;
`;

export const TitleScreen = ({ navigation }: any) => {
  return (
    <TitleScreenContainer>
      <TitleContainer>
        <H1Text>TikTak</H1Text>
        <Divider width="142px" />
        <SubtitleContainer>
          <SubTitleText>a game by duncan iaria</SubTitleText>
        </SubtitleContainer>
      </TitleContainer>
      <ButtonContainer>
        <ButtonWithText
          activeOpacity={0.9}
          onPress={() => navigation.navigate(Screens.Game)}
          text="Let's Play"
        />
        <View style={{ height: 12 }} />
        <ButtonWithText
          activeOpacity={0.9}
          onPress={() => navigation.navigate(Screens.Results)}
          text="Results Test"
        />
      </ButtonContainer>
    </TitleScreenContainer>
  );
};
