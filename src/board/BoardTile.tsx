import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Tile = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface IProps {
  tile: any;
  onPress: any;
}

export const BoardTile = ({ tile, onPress }: IProps) => {
  return (
    <Tile onPress={onPress}>
      <Text>{tile}</Text>
    </Tile>
  );
};
