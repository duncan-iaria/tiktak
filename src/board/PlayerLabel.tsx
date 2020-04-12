import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const LabelContainer = styled(View)<{ isFlipped: boolean }>`
  flex: 1;
  padding: 12px;
  align-items: center;
  /* justify-content: ${(props) =>
    props.isFlipped ? 'flex-end' : 'flex-start'}; */
  justify-content: center;
`;

const LabelText = styled(Text)<{ isFlipped: boolean; isActive: boolean }>`
  font-family: ${(props) => props.theme.defaultFontFamily};
  font-size: ${(props) => (props.isActive ? '36px' : '24px')};
  transform: ${(props) => (props.isFlipped ? 'rotate(180deg)' : '')};
`;

interface IProps {
  label: string;
  isActive: boolean;
  isFlipped?: boolean;
}

export const PlayerLabel = ({ label, isActive, isFlipped = false }: IProps) => {
  return (
    <LabelContainer isFlipped={isFlipped}>
      <LabelText isFlipped={isFlipped} isActive={isActive}>
        {label}
      </LabelText>
    </LabelContainer>
  );
};
