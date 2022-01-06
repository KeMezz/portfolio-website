import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { windowSize } from "../atom";
import { useWindowSize } from "../useWindowSize";

const Container = styled(motion.nav)`
  overflow: hidden;
  background-color: ${(props) => props.theme.bgColor.main};
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vw 0;
  gap: 3vw;
  @media (max-width: 1200px) {
    min-height: 87vh;
  }
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
  @media (min-width: 1200px) {
    &:hover {
      text-shadow: none;
      color: crimson;
    }
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
  const size = useRecoilValue(windowSize);
  useEffect(() => {
    rowAnimation.start({ x: 0 });
  }, [rowAnimation]);
  useWindowSize();
  const onMenuClick = async (navi: string, direction: number) => {
    await rowAnimation.start({ x: direction });
    await navigate(`/${navi}`);
  };
  return (
    <>
      <AnimatePresence>
        <Container layoutId="whitebox">
          <Row
            key="hyeongjin"
            initial={{ x: 5000 }}
            animate={rowAnimation}
            transition={{ duration: 1 }}
            onClick={() => onMenuClick("hyeongjin", 5000)}
          >
            {size.width > 1200 && size.height * 2 > size.width ? (
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
            onClick={() => onMenuClick("projects", -5000)}
          >
            {size.width > 1200 && size.height * 2 > size.width ? (
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
            onClick={() => onMenuClick("skills", 5000)}
          >
            {size.width > 1200 && size.height * 2 > size.width ? (
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
            onClick={() => onMenuClick("contacts", -5000)}
          >
            {size.width > 1200 && size.height * 2 > size.width ? (
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
