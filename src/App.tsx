import { useRecoilValue } from "recoil";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { dark } from "./atom";
import Router from "./Router";
import { darkTheme, lightTheme } from "./Themes/theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgColor.sub};
    color: ${(props) => props.theme.textColor.main};
    padding-top: 3vw;
    padding-left: 3vw;
    padding-right: 3vw;
    @media (max-width: 1200px) {
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

function App() {
  const isDark = useRecoilValue(dark);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
