import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { BoardStateType } from './GameStateStore';

const Tile = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TileText = styled(Text)<{ player: BoardStateType }>`
  color: ${(props) =>
    props.player === BoardStateType.X
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  font-size: 64px;
  font-family: 'FredokaOne-Regular';
`;

interface IProps {
  tile: any;
  onPress: any;
}

export const BoardTile = ({ tile, onPress }: IProps) => {
  return (
    <Tile onPress={onPress}>
      <TileText player={tile}>{tile}</TileText>
    </Tile>
  );
};
