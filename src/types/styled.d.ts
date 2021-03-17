import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        main: string;
        secondary: string;
        orange: string;
        pageBackground: string;
        lightBlue: string;
        green: string;
        red: string;
        white: string;
    };
    fonts: {
        main: string;
        title: string;
    }
    
  }
}