import 'styled-components';

// Extended styled-component declarations
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    h1FontSize: string;
    h2FontSize: string;
    bodyFontSize: string;
    defaultFontFamily: string;

    colors: {
      primary: string;
      secondary: string;
      buttonText: string;
      defaultText: string;
      darkGray: string;
      darkGrey: string;
      background: string;
    };
  }
}
