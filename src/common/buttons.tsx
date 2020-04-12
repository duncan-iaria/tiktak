import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import { ButtonText } from './typography';

export const Button = styled(TouchableOpacity)`
  padding: 24px;

  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid #549384;
  background-color: ${(props) => props.theme.colors.primary};

  justify-content: center;
  align-items: center;
`;

const TransparentButton = styled(TouchableOpacity)`
  padding: 24px;

  background-color: transparent;

  justify-content: center;
  align-items: center;
`;

interface IButtonWithTextProps {
  text: string;
  onPress: () => void;
  activeOpacity?: number;
}

export const ButtonWithText = ({
  text,
  onPress,
  activeOpacity = 0.8,
}: IButtonWithTextProps) => {
  return (
    <Button onPress={onPress} activeOpacity={activeOpacity}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export const SecondaryButton = ({
  text,
  onPress,
  activeOpacity = 0.8,
}: IButtonWithTextProps) => {
  return (
    <TransparentButton activeOpacity={activeOpacity} onPress={onPress}>
      <ButtonText underlined={true}>{text}</ButtonText>
    </TransparentButton>
  );
};
