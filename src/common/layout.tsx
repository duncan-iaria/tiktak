import { View } from 'react-native';
import styled from 'styled-components';

export const ScreenContainer = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Divider = styled(View)<{ width: string }>`
  width: ${(props) => props.width};
  height: 6px;
  margin: 6px 0px;

  background-color: ${(props) => props.theme.colors.primary};
`;
