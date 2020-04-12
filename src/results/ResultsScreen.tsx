import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import {
  ButtonWithText,
  SecondaryButton,
  Screens,
  H1Text,
  H2Text,
  Divider,
} from '../common';
import { BoardStateType } from '../board';

const ResultsScreenContainer = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
  align-items: center;
`;

const ResultsHeaderContainer = styled(View)`
  margin-top: 164px;
  align-items: center;
  justify-content: center;
`;

const PastVictoriesContainer = styled(View)`
  flex: 1;
`;

const ButtonContainer = styled(View)`
  width: 256px;
`;

interface IProps {
  navigation: any;
  route: any;
}

export const ResultsScreen = ({ route, navigation }: IProps) => {
  // const {
  //   params: { winner },
  // } = route;
  const winner = BoardStateType.None;
  const tempWinMessage =
    winner === BoardStateType.None ? 'Draw!' : `${winner}'s Win!`;
  return (
    <ResultsScreenContainer>
      <ResultsHeaderContainer>
        <H1Text>{tempWinMessage}</H1Text>
        <Divider width="172px" />
      </ResultsHeaderContainer>
      <PastVictoriesContainer>
        <H2Text>Past Victories</H2Text>
      </PastVictoriesContainer>
      <ButtonContainer>
        <ButtonWithText
          text="Play Again"
          onPress={() => navigation.navigate(Screens.Game)}
        />
        <SecondaryButton
          activeOpacity={0.6}
          text="Quit"
          onPress={() => navigation.navigate(Screens.Title)}
        />
      </ButtonContainer>
    </ResultsScreenContainer>
  );
};
