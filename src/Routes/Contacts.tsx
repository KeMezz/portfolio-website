import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import Title from "../Components/Title";

const Wrapper = styled(motion.section)`
  background-color: ${(props) => props.theme.bgColor.main};
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  @media (max-width: 1200px) {
    min-height: 87vh;
  }
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

function Contacts() {
  return (
    <>
      <AnimatePresence>
        <Wrapper layoutId="whitebox">
          <Title titleName="contacts" />
          <Container>
            <GithubLogo
              className="xi-github"
              onClick={() => window.open("https://github.com/KeMezz")}
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotateZ: 360 }}
              transition={{ delay: 0.7, duration: 1.5, type: "spring" }}
            />
          </Container>
        </Wrapper>
      </AnimatePresence>
    </>
  );
}

export default Contacts;
