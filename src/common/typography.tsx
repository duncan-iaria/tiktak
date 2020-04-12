import { Text } from 'react-native';
import styled from 'styled-components';

const H1Text = styled(Text)`
  color: ${(props) => props.theme.colors.defaultText};
  font-family: 'MS-Mincho';
  font-size: ${(props) => props.theme.h1FontSize};
`;

const H2Text = styled(Text)`
  color: ${(props) => props.theme.colors.defaultText};
  font-family: 'MS-Mincho';
  font-size: ${(props) => props.theme.h2FontSize};
`;

const ButtonText = styled(Text)<{ underlined?: boolean }>`
  font-family: 'MS-Mincho';
  font-size: ${(props) => props.theme.bodyFontSize};
  text-decoration: ${(props) => (props.underlined ? 'underline' : undefined)};
`;

const SubTitleText = styled(Text)`
  font-family: 'MS-Mincho';
  font-size: ${(props) => props.theme.bodyFontSize};
  text-align: center;
`;

export { H1Text, H2Text, ButtonText, SubTitleText };
