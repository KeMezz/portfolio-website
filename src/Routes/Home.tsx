import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { windowSizeAtom } from "../atom";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

const Container = styled(motion.nav)`
  overflow: hidden;
  background-color: ${(props) => props.theme.bgColor.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vw 0;
  gap: 3vw;
`;

const Row = styled(motion.div)`
  cursor: pointer;
  white-space: nowrap;
  text-transform: uppercase;
  font-size: 6vw;
  font-weight: 900;
  color: ${(props) => props.theme.bgColor.main};
  text-shadow: -1px -1px 0 ${(props) => props.theme.textColor.sub},
    1px -1px 0 ${(props) => props.theme.textColor.sub},
    -1px 1px 0 ${(props) => props.theme.textColor.sub},
    1px 1px 0 ${(props) => props.theme.textColor.sub};
  &:hover {
    text-shadow: none;
    color: crimson;
  }
  .point {
    text-shadow: none;
    color: ${(props) => props.theme.textColor.main};
  }
  @media (min-width: 2000px) {
    font-size: 8vh;
  }
  @media (max-width: 1200px) {
    font-size: 7vh;
  }
`;

function Home() {
  const navigate = useNavigate();
  const rowAnimation = useAnimation();
  const windowSize = useRecoilValue(windowSizeAtom);
  useEffect(() => {
    rowAnimation.start({ x: 0 });
  }, [rowAnimation]);
  const onMenuClick = async (navi: string, direction: number) => {
    await rowAnimation.start({ x: direction });
    await navigate(`/${navi}`);
  };
  return (
    <>
      <Helmet>
        <title>Home | 형진 포트폴리오</title>
      </Helmet>
      <AnimatePresence>
        <Container
          style={{
            height:
              windowSize.width < 1200
                ? window.innerHeight * 0.87
                : window.innerHeight * 0.8,
          }}
        >
          <Row
            key="hyeongjin"
            initial={{ x: 5000 }}
            animate={rowAnimation}
            transition={{ duration: 1 }}
            onClick={() => {
              ReactGA.event({
                category: "Click Nav Menu",
                action: "홈 화면에서 형진 페이지로 클릭함",
              });
              onMenuClick("hyeongjin", 5000);
            }}
          >
            {windowSize.width > 1200 &&
            windowSize.height * 2 > windowSize.width ? (
              <h1>
                yeongjin<span className="point">hyeongjin</span>
                hyeongjinhyeongjin
              </h1>
            ) : (
              <h1>
                hyeongjinhyeongjinhyeongjin
                <span className="point">hyeongjin</span>
                hyeongjinhyeongjinhyeongjin
              </h1>
            )}
          </Row>
          <Row
            key="projects"
            initial={{ x: -5000 }}
            animate={rowAnimation}
            transition={{ duration: 0.9 }}
            onClick={() => {
              ReactGA.event({
                category: "Click Nav Menu",
                action: "홈 화면에서 프로젝트 페이지를 클릭함",
              });
              onMenuClick("projects", -5000);
            }}
          >
            {windowSize.width > 1200 &&
            windowSize.height * 2 > windowSize.width ? (
              <h1>
                ojectsprojects<span className="point">projects</span>
                projectsprojects
              </h1>
            ) : (
              <h1>
                projectsprojectsprojects
                <span className="point">projects</span>
                projectsprojectsprojects
              </h1>
            )}
          </Row>
          <Row
            key="skills"
            initial={{ x: 5000 }}
            animate={rowAnimation}
            transition={{ duration: 0.8 }}
            onClick={() => {
              ReactGA.event({
                category: "Click Nav Menu",
                action: "홈 화면에서 스킬 페이지를 클릭함",
              });
              onMenuClick("skills", 5000);
            }}
          >
            {windowSize.width > 1200 &&
            windowSize.height * 2 > windowSize.width ? (
              <h1>
                llsskillsskills<span className="point">skills</span>
                skillsskills
              </h1>
            ) : (
              <h1>
                skillsskillsskillsskillsskills
                <span className="point">skills</span>
                skillsskillsskillsskillsskills
              </h1>
            )}
          </Row>
          <Row
            key="contacts"
            initial={{ x: -5000 }}
            animate={rowAnimation}
            transition={{ duration: 0.6 }}
            onClick={() => {
              ReactGA.event({
                category: "Click Nav Menu",
                action: "홈 화면에서 연락처 페이지를 클릭함",
              });
              onMenuClick("contacts", -5000);
            }}
          >
            {windowSize.width > 1200 &&
            windowSize.height * 2 > windowSize.width ? (
              <h1>
                tscontactscontacts<span className="point">contacts</span>
                contacts
              </h1>
            ) : (
              <h1>
                contactscontactscontacts
                <span className="point">contacts</span>
                contactscontactscontacts
              </h1>
            )}
          </Row>
        </Container>
      </AnimatePresence>
    </>
  );
}

export default Home;
