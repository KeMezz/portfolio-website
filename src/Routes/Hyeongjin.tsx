import {
  AnimatePresence,
  motion,
  useAnimation,
  useElementScroll,
  useViewportScroll,
  Variants,
} from "framer-motion";
import { Helmet } from "react-helmet";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { windowSizeAtom } from "../atom";
import memoji from "../Images/memoji.webp";
import cryptoImg from "../Images/react-cryptotracker.webp";
import momentumImg from "../Images/js-momentum.webp";
import portfolioImg from "../Images/react-portfolio.webp";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  background-color: ${(props) => props.theme.bgColor.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 8vw;
  padding-top: 5vw;
  padding-bottom: 10vw;
`;

const Introduction = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
  }
`;
const IntroductionText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  h2 {
    padding-top: 12px;
    font-size: 36px;
    line-height: 1.6;
    font-weight: 500;
  }
  @media (max-width: 1200px) {
    align-items: center;
    order: 2;
  }
`;

const Highlight = styled(motion.div)`
  transform-origin: left;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgb(20, 255, 20, 0.5);
  width: fit-content;
  h1 {
    position: absolute;
    bottom: calc(78px / 2);
    font-size: 78px;
    font-weight: 900;
    position: relative;
  }
`;

const Memoji = styled(motion.img)`
  place-self: center;
  width: 80%;
  min-width: 240px;
  @media (max-width: 1200px) {
    width: 50%;
  }
`;

const ScrollIndicator = styled(motion.div)`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  color: #999;
  h3 {
    font-size: 50px;
    font-weight: 200;
    text-transform: uppercase;
  }
  i {
    font-size: 50px;
  }
`;

const SectionA = styled(motion.section)`
  margin-top: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  position: relative;
  h3 {
    text-align: right;
    font-size: 40px;
    line-height: 1.8;
    font-weight: 500;
    top: calc(40vh - 3vw);
    position: sticky;
    z-index: 10;
  }
  img {
    padding: 0 3vw;
    width: 80%;
    max-width: 1000px;
    opacity: 0.7;
    &:nth-child(3) {
      align-self: flex-end;
    }
    &:last-child {
      margin-bottom: 150px;
    }
  }
`;

const sectionB = styled.section``;

const memojiVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 1 } },
};

function Hyeongjin() {
  const windowSize = useRecoilValue(windowSizeAtom);
  const { scrollY } = useViewportScroll();
  useEffect(
    () =>
      scrollY.onChange(() =>
        scrollY.get() > 650
          ? aTextAnimation.start({ position: "sticky" })
          : aTextAnimation.start({ position: "unset" })
      ),
    [scrollY]
  );
  const aTextAnimation = useAnimation();
  return (
    <>
      <Helmet>
        <title>About | Hyeongjin Portfolio</title>
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
          <Container>
            <Introduction style={{ height: window.innerHeight * 0.65 }}>
              <IntroductionText>
                <Highlight
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    안녕하세요!
                  </motion.h1>
                </Highlight>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  주니어 프론트엔드 개발자 정형진입니다.
                </motion.h2>
              </IntroductionText>
              <Memoji
                variants={memojiVariants}
                initial="initial"
                animate="animate"
                src={memoji}
                alt="memoji"
              />
            </Introduction>
            <ScrollIndicator
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <motion.h3>scroll</motion.h3>
              <motion.i className="xi-angle-down-thin"></motion.i>
            </ScrollIndicator>
            <SectionA>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                쓰기 쉽고,
                <br />
                보기에도 아름다운 것을
                <br />
                만드는 즐거움과 열정으로
                <br />
                개발하고 있습니다.
              </motion.h3>
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 1 }}
                src={cryptoImg}
                alt="Crypto Tracker 웹사이트 썸네일"
              />
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 1 }}
                src={momentumImg}
                alt="Momentum 클론 웹사이트 썸네일"
              />
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 1 }}
                src={portfolioImg}
                alt="포트폴리오 웹사이트 썸네일"
              />
            </SectionA>
          </Container>
        </Wrapper>
      </AnimatePresence>
    </>
  );
}

export default Hyeongjin;
