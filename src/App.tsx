import { useRecoilValue } from "recoil";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { dark } from "./atom";
import Router from "./Router";
import { darkTheme, lightTheme } from "./Themes/theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgColor.main};
    color: ${(props) => props.theme.textColor.main};
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
