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
  console.log(tile);
  return (
    <Tile onPress={onPress}>
      <Text>{tile}</Text>
    </Tile>
  );
};
