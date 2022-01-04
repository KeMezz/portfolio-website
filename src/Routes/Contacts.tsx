import { motion } from "framer-motion";
import styled from "styled-components";
import Title from "../Components/Title";

const Container = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  padding-bottom: 10vw;
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
    </>
  );
}

export default Contacts;
