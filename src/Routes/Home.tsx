import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { windowSize } from "../atom";
import { useWindowSize } from "../useWindowSize";

const Container = styled.nav`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 9vw;
  gap: 3vw;
  @media (max-width: 1200px) {
    height: calc(100vh - 100px);
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
  const size = useRecoilValue(windowSize);
  useEffect(() => {
    rowAnimation.start({ x: 0 });
  }, [rowAnimation]);
  useWindowSize();
  return (
    <>
      {size.width > 1200 && size.height * 2 > size.width ? (
        <Container>
          <AnimatePresence>
            <Row
              key="hyeongjin"
              initial={{ x: window.innerWidth * 2 }}
              animate={rowAnimation}
              transition={{ duration: 0.3 }}
              onClick={async () => {
                await rowAnimation.start({ x: window.innerWidth * 2 });
                await navigate("/hyeongjin");
              }}
            >
              <span>hyeongjin</span>
              <span className="point">hyeongjin</span>
              <span>hyeongjin</span>
              <span>hyeongjin</span>
            </Row>
            <Row
              key="projects"
              initial={{ x: -(window.innerWidth * 2) }}
              animate={rowAnimation}
              transition={{ duration: 0.5 }}
              onClick={async () => {
                await rowAnimation.start({ x: -window.innerWidth * 2 });
                await navigate("/projects");
              }}
            >
              <span>ojects</span>
              <span>projects</span>
              <span className="point">projects</span>
              <span>projects</span>
              <span>projects</span>
            </Row>
            <Row
              key="stacks"
              initial={{ x: window.innerWidth * 2 }}
              animate={rowAnimation}
              transition={{ duration: 0.6 }}
              onClick={async () => {
                await rowAnimation.start({ x: window.innerWidth * 2 });
                await navigate("/stacks");
              }}
            >
              <span>stacks</span>
              <span>stacks</span>
              <span className="point">stacks</span>
              <span>stacks</span>
              <span>stac</span>
            </Row>
            <Row
              key="contacts"
              initial={{ x: -(window.innerWidth * 2) }}
              animate={rowAnimation}
              transition={{ duration: 0.7 }}
              onClick={async () => {
                await rowAnimation.start({ x: -window.innerWidth * 2 });
                await navigate("/contacts");
              }}
            >
              <span>contacts</span>
              <span>contacts</span>
              <span className="point">contacts</span>
              <span>contacts</span>
            </Row>
          </AnimatePresence>
        </Container>
      ) : (
        <Container>
          <AnimatePresence>
            <Row
              key="hyeongjin"
              initial={{ x: 5000 }}
              animate={rowAnimation}
              transition={{ duration: 0.6 }}
              onClick={async () => {
                await rowAnimation.start({ x: 5000 });
                await navigate("/hyeongjin");
              }}
            >
              <span>hyeongjin</span>
              <span>hyeongjin</span>
              <span>hyeongjin</span>
              <span className="point">hyeongjin</span>
              <span>hyeongjin</span>
              <span>hyeongjin</span>
              <span>hyeongjin</span>
            </Row>
            <Row
              key="projects"
              initial={{ x: -5000 }}
              animate={rowAnimation}
              transition={{ duration: 0.7 }}
              onClick={async () => {
                await rowAnimation.start({ x: -5000 });
                await navigate("/projects");
              }}
            >
              <span>projects</span>
              <span>projects</span>
              <span>projects</span>
              <span className="point">projects</span>
              <span>projects</span>
              <span>projects</span>
              <span>projects</span>
            </Row>
            <Row
              key="stacks"
              initial={{ x: 5000 }}
              animate={rowAnimation}
              transition={{ duration: 0.8 }}
              onClick={async () => {
                await rowAnimation.start({ x: 5000 });
                await navigate("/stacks");
              }}
            >
              <span>stacks</span>
              <span>stacks</span>
              <span>stacks</span>
              <span>stacks</span>
              <span>stacks</span>
              <span className="point">stacks</span>
              <span>stacks</span>
              <span>stacks</span>
              <span>stacks</span>
              <span>stacks</span>
              <span>stacks</span>
            </Row>
            <Row
              key="contacts"
              initial={{ x: -5000 }}
              animate={rowAnimation}
              transition={{ duration: 1 }}
              onClick={async () => {
                await rowAnimation.start({ x: -5000 });
                await navigate("/contacts");
              }}
            >
              <span>contacts</span>
              <span>contacts</span>
              <span>contacts</span>
              <span className="point">contacts</span>
              <span>contacts</span>
              <span>contacts</span>
              <span>contacts</span>
            </Row>
          </AnimatePresence>
        </Container>
      )}
    </>
  );
}

export default Home;
