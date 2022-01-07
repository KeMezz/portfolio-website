import { AnimatePresence, motion, Variants } from "framer-motion";
import { Helmet } from "react-helmet";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { windowSizeAtom } from "../atom";
import Title from "../Components/Title";

const Wrapper = styled(motion.section)`
  background-color: ${(props) => props.theme.bgColor.main};
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const GithubLogo = styled(motion.div)`
  font-size: 30vw;
  cursor: pointer;
  @media (min-width: 2000px) {
    font-size: 40vh;
  }
  @media (max-width: 1200px) {
    font-size: 40vh;
  }
`;

const logoVariants: Variants = {
  initial: { x: -window.innerWidth },
  animate: {
    x: 0,
    rotateZ: 360,
    transition: { delay: 0.7, duration: 2, type: "spring" },
  },
};

function Contacts() {
  const windowSize = useRecoilValue(windowSizeAtom);
  return (
    <>
      <Helmet>
        <title>Contacts | 형진 포트폴리오</title>
      </Helmet>
      <AnimatePresence>
        <Wrapper
          layoutId="whitebox"
          style={{
            minHeight:
              windowSize.width < 1200
                ? window.innerHeight * 0.87
                : window.innerHeight * 0.8,
          }}
        >
          <Title titleName="contacts" />
          <Container>
            <GithubLogo
              className="xi-github"
              onClick={() => window.open("https://github.com/KeMezz")}
              variants={logoVariants}
              initial="initial"
              animate="animate"
            />
          </Container>
        </Wrapper>
      </AnimatePresence>
    </>
  );
}

export default Contacts;
