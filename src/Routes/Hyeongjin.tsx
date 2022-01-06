import { AnimatePresence, motion, Variants } from "framer-motion";
import styled from "styled-components";
import Title from "../Components/Title";
import memoji from "../Images/memoji.webp";

const Wrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.bgColor.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80vh;
  @media (max-width: 1200px) {
    min-height: 87vh;
  }
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
  /* position: absolute;
  bottom: 8.6vw; */
  left: 0;
  right: 0;
  margin: 0 auto;
  object-fit: cover;
  width: 35vw;
  cursor: pointer;
  transform-origin: bottom;
  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 320px) {
    width: 200px;
  }
`;

const memojiVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
};

function Hyeongjin() {
  return (
    <>
      <AnimatePresence>
        <Wrapper layoutId="whitebox">
          <Title titleName="hyeongjin" />
          <Container>
            {/* <Memoji
              variants={memojiVariants}
              initial="initial"
              animate="animate"
              src={memoji}
              alt="memoji"
            /> */}
          </Container>
        </Wrapper>
      </AnimatePresence>
    </>
  );
}

export default Hyeongjin;
