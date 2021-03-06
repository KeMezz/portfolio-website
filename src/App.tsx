import { useRecoilValue } from "recoil";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { dark } from "./atom";
import Router from "./Router";
import { darkTheme, lightTheme } from "./Themes/theme";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { useWindowSize } from "./useWindowSize";

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
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

ReactGA.event({
  category: "Visit",
  action: "웹사이트에 방문함",
});
ReactGA.exception({
  description: "에러가 발생함",
  fatal: true,
});

function App() {
  useWindowSize();
  const isDark = useRecoilValue(dark);
  useEffect(() => {
    ReactGA.initialize("UA-216914033-1");
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
