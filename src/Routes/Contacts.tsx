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

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  gap: 6vw;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const GithubLogo = styled(motion.div)`
  font-size: 20vw;
  cursor: pointer;
  @media (min-width: 2000px) {
    font-size: 40vh;
  }
  @media (max-width: 1200px) {
    font-size: 150px;
  }
`;

const Email = styled(motion.div)`
  font-size: 20vw;
  cursor: pointer;
  @media (min-width: 2000px) {
    font-size: 40vh;
  }
  @media (max-width: 1200px) {
    font-size: 150px;
  }
`;

const containerVariants: Variants = {
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const hyperlinkVariants: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
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
          style={{
            minHeight:
              windowSize.width < 1200
                ? window.innerHeight * 0.87
                : window.innerHeight * 0.8,
          }}
        >
          <Title titleName="contacts" />
          <Container
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <GithubLogo
              className="xi-github"
              onClick={() => window.open("https://github.com/KeMezz")}
              variants={hyperlinkVariants}
            />
            <Email
              className="xi-gmail"
              variants={hyperlinkVariants}
              onClick={() => window.open("mailto:pn3scene@gmail.com")}
            />
          </Container>
        </Wrapper>
      </AnimatePresence>
    </>
  );
}

export default Contacts;
