import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components';

import { IPastVictory } from '../interfaces';
import { BodyText } from '../common';
import { PastVictoryItem } from './PastVictoryItem';

interface IProps {
  victories: Array<IPastVictory>;
}

const NoneFoundContainer = styled(View)`
  padding: 32px;
  justify-content: center;
  align-items: center;
`;

const PastVictoriesScrollView = styled(ScrollView)`
  padding-right: 12px;
`;

export const PastVictoryList = ({ victories }: IProps) => {
  return victories.length > 0 ? (
    <PastVictoriesScrollView>
      {victories.map((tempVictory: IPastVictory, index: number) => (
        <PastVictoryItem key={index} victory={tempVictory} />
      ))}
    </PastVictoriesScrollView>
  ) : (
    <NoneFoundContainer>
      <BodyText>no past victories yet...</BodyText>
    </NoneFoundContainer>
  );
};
