import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import {
  getPastVictories,
  addToPastVictories,
  clearPastVictories,
  isDebugMode,
} from '../utils';
import { IPastVictory } from '../interfaces';
import {
  ButtonWithText,
  SecondaryButton,
  Screens,
  H1Text,
  H2Text,
  Divider,
} from '../common';
import { BoardStateType, gameStateStore, GameAction } from '../board';
import { PastVictoryList } from './PastVictoryList';

const ResultsScreenContainer = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
  align-items: center;
`;

const ResultsHeaderContainer = styled(View)`
  margin-top: 128px;
  align-items: center;
  justify-content: center;
`;

const PastVictoriesContainer = styled(View)`
  flex: 1;
  padding: 36px;
  width: 100%;
`;

const ButtonContainer = styled(View)`
  width: 256px;
`;

interface IProps {
  navigation: any;
  route: any;
}

export const ResultsScreen = ({ route, navigation }: IProps) => {
  const [pastVictories, setPastVictories] = useState<IPastVictory[]>([]);
  const {
    params: { winner },
  } = route;

  const { dispatch } = useContext(gameStateStore);

  const onNextScreen = async (nextRoute: Screens) => {
    dispatch({ type: GameAction.ResetGameBoard, payload: null });
    await addToPastVictories({ winner, date: new Date() });
    navigation.navigate(nextRoute);
  };

  useEffect(() => {
    const getVictories = async () => {
      const tempVictories = await getPastVictories();
      setPastVictories([...tempVictories]);
    };

    getVictories();
  }, []);

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
        <PastVictoryList victories={pastVictories} />
      </PastVictoriesContainer>
      <ButtonContainer>
        <ButtonWithText
          text="Play Again"
          onPress={() => onNextScreen(Screens.Game)}
        />
        <SecondaryButton
          activeOpacity={0.6}
          text="Quit"
          onPress={() => onNextScreen(Screens.Title)}
        />
        {isDebugMode() && (
          <SecondaryButton
            activeOpacity={0.6}
            text="reset"
            onPress={() => clearPastVictories()}
          />
        )}
      </ButtonContainer>
    </ResultsScreenContainer>
  );
};
