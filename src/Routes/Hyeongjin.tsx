import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import Title from "../Components/Title";
import memoji from "../Images/memoji.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3vw;
  padding-top: 5vw;
  padding-bottom: 10vw;
`;

const Memoji = styled(motion.img)`
  position: absolute;
  bottom: 8.6vw;
  left: 0;
  right: 0;
  margin: 0 auto;
  object-fit: cover;
  width: 35vw;
  cursor: pointer;
  transform-origin: bottom;
  @media (max-width: 1200px) {
    width: 300px;
    bottom: 79px;
  }
  @media (max-width: 320px) {
    width: 200px;
    bottom: 86px;
  }
`;

const memojiVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
};

function Hyeongjin() {
  return (
    <>
      <Wrapper>
        <Title titleName="hyeongjin" />
        <Container>
          <Memoji
            variants={memojiVariants}
            initial="initial"
            animate="animate"
            src={memoji}
            alt="memoji"
          />
        </Container>
      </Wrapper>
    </>
  );
}

export default Hyeongjin;
