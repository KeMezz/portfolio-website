import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: {
      main: string;
      sub: string;
      deep: string;
    };
    textColor: {
      main: string;
      sub: string;
    };
  }
}
