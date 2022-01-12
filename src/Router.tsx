import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contacts from "./Routes/Contacts";
import Home from "./Routes/Home";
import Hyeongjin from "./Routes/Hyeongjin";
import Projects from "./Routes/Projects";
import Skills from "./Routes/Skills";
import styled from "styled-components";
import { useWindowSize } from "./useWindowSize";
import { windowSizeAtom } from "./atom";
import { useRecoilValue } from "recoil";
import NotFound from "./Routes/NotFound";

const Footer = styled.footer`
  width: 100%;
  height: calc(20vh - 3vw);
  background-color: ${(props) => props.theme.bgColor.sub};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-height: 80px;
  h3 {
    font-weight: 800;
    text-align: center;
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    height: 13vh;
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 10px;
    }
  }
  @media (max-width: 320px) {
    h3 {
      font-size: 14px;
    }
  }
`;

function Router() {
  useWindowSize();
  const windowSize = useRecoilValue(windowSizeAtom);
  return (
    <BrowserRouter basename="/portfolio-website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hyeongjin" element={<Hyeongjin />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectId" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer
        style={{
          height:
            windowSize.width < 1200
              ? window.innerHeight * 0.13
              : window.innerHeight * 0.2 - window.innerWidth * 0.03,
        }}
      >
        <h3>FRONTEND DEVELOPER PORTFOLIO</h3>
        <p>Copyright 2022. Hyeong Jin. All rights reserved.</p>
      </Footer>
    </BrowserRouter>
  );
}

export default Router;
