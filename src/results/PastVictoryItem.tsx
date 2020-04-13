import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import moment from 'moment';

import { IPastVictory } from '../interfaces';
import { BodyText } from '../common';
import { BoardStateType } from '../board';

const timeFormat = 'h:mma M[/]D[/]YYYY';
const VictoryItemContainer = styled(View)`
  margin: 4px 0px;
  flex-direction: row;
  justify-content: space-between;
`;

interface IProps {
  victory: IPastVictory;
}

export const PastVictoryItem = ({ victory }: IProps) => {
  const tempWinnerTitle =
    victory.winner === BoardStateType.None ? 'Draw' : `${victory.winner}'s Win`;
  return (
    <VictoryItemContainer>
      <BodyText>{tempWinnerTitle}</BodyText>
      <BodyText>{moment(victory.date).format(timeFormat)}</BodyText>
    </VictoryItemContainer>
  );
};
