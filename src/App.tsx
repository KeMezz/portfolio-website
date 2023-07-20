import { useRecoilValue } from "recoil";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { dark } from "./atom";
import Router from "./Router";
import { darkTheme, lightTheme } from "./Themes/theme";
import { useWindowSize } from "./useWindowSize";
import ReactGA from "react-ga4";
import { useEffect } from "react";

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
  action: "사이트 방문",
});

function App() {
  useWindowSize();
  const isDark = useRecoilValue(dark);
  useEffect(() => {
    ReactGA.initialize("G-BY9H6FSQK9");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
