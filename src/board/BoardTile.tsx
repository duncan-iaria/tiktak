import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Tile = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 16px;
`;

const TileText = styled(Text)`
  color: white;
  font-size: 16px;
`;

interface IProps {
  tile: any;
  onPress: any;
}

export const BoardTile = ({ tile, onPress }: IProps) => {
  return (
    <Tile onPress={onPress}>
      <TileText>{tile}</TileText>
    </Tile>
  );
};
