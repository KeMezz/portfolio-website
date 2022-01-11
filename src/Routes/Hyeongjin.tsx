import { AnimatePresence, motion, Variants } from "framer-motion";
import { Helmet } from "react-helmet";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { windowSizeAtom } from "../atom";
import memoji from "../Images/memoji.webp";
import cryptoImg from "../Images/react-cryptotracker.webp";
import momentumImg from "../Images/js-momentum.webp";
import portfolioImg from "../Images/react-portfolio.webp";
import htmlLogo from "../Images/logo-html.png";
import cssLogo from "../Images/logo-css.png";
import jsLogo from "../Images/logo-js.png";
import tsLogo from "../Images/logo-typescript.png";
import sassLogo from "../Images/logo-scss.png";
import reactLogo from "../Images/logo-react.png";
import { useNavigate } from "react-router-dom";

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
  padding: 0 7vw;
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
  @media (max-width: 768px) {
    margin-top: 10vh;
  }
`;
const IntroductionText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  h2 {
    padding-top: 12px;
    font-size: calc(12px + 1vw);
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
    bottom: 2vw;
    font-size: calc(20px + 3vw);
    font-weight: 900;
    position: relative;
  }
  @media (max-width: 1200px) {
    height: 30px;
  }
`;

const Memoji = styled(motion.img)`
  place-self: center;
  width: 80%;
  min-width: 240px;
  @media (max-width: 1200px) {
    width: 50%;
    align-self: end;
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
  font-size: 40px;
  h3 {
    font-weight: 200;
    text-transform: uppercase;
  }
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const SectionA = styled(motion.section)`
  margin-top: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10vh;
  position: relative;
  h3 {
    text-align: right;
    font-size: calc(12px + 1vw);
    line-height: 1.8;
    font-weight: 500;
    top: calc(40vh - 3vw);
    position: sticky;
    z-index: 10;
    text-shadow: -1px -1px 0 ${(props) => props.theme.bgColor.main},
      1px -1px 0 ${(props) => props.theme.bgColor.main},
      -1px 1px 0 ${(props) => props.theme.bgColor.main},
      1px 1px 0 ${(props) => props.theme.bgColor.main};
  }
  img {
    padding: 0 3vw;
    width: 80%;
    max-width: 1000px;
    opacity: 0.6;
    &:nth-child(3) {
      align-self: flex-end;
    }
    &:last-child {
      margin-bottom: 150px;
    }
  }
`;

const SectionB = styled.section`
  margin-top: 50vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  h3 {
    position: sticky;
    font-size: calc(12px + 1vw);
    line-height: 1.8;
    font-weight: 500;
    top: calc(40vh - 3vw);
    z-index: 10;
    text-shadow: -1px -1px 0 ${(props) => props.theme.bgColor.main},
      1px -1px 0 ${(props) => props.theme.bgColor.main},
      -1px 1px 0 ${(props) => props.theme.bgColor.main},
      1px 1px 0 ${(props) => props.theme.bgColor.main};
  }
`;

const SecBImages = styled(motion.div)`
  position: relative;
  height: 100vh;
  margin-top: 30vh;
  img {
    position: absolute;
    width: 12vw;
    max-width: 150px;
    opacity: 0.6;
    :nth-child(1) {
      left: 8vw;
      top: 0%;
    }
    :nth-child(2) {
      right: 2.2vw;
      top: 30%;
    }
    :nth-child(3) {
      left: 3vw;
      top: 40%;
    }
    :nth-child(4) {
      right: 20vw;
      top: 70%;
    }
    :nth-child(5) {
      left: 22vw;
      top: 50%;
    }
    :nth-child(6) {
      right: 30vw;
      top: 20%;
    }
  }
`;

const SectionC = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50vh;
  h3 {
    font-size: calc(11px + 1vw);
    line-height: 1.8;
    font-weight: 500;
    text-align: center;
    span {
      color: #9d32eb;
      cursor: pointer;
    }
  }
`;

const imgVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 0.6, y: 0, transition: { duration: 1 } },
};

const memojiVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 1 } },
};

function Hyeongjin() {
  const windowSize = useRecoilValue(windowSizeAtom);
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>About | 형진 포트폴리오</title>
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
          <Container>
            <Introduction
              style={{
                height:
                  windowSize.width < 1200
                    ? window.innerHeight * 0.7
                    : window.innerHeight * 0.65,
              }}
            >
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
            <SectionA initial="initial">
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
                variants={imgVariants}
                whileInView="whileInView"
                src={cryptoImg}
                alt="Crypto Tracker 웹사이트 썸네일"
              />
              <motion.img
                variants={imgVariants}
                whileInView="whileInView"
                src={momentumImg}
                alt="Momentum 클론 웹사이트 썸네일"
              />
              <motion.img
                variants={imgVariants}
                whileInView="whileInView"
                src={portfolioImg}
                alt="포트폴리오 웹사이트 썸네일"
              />
            </SectionA>
            <SectionB>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                언제나 새로운 것을 배우고 싶어하고,
                <br />
                어제보다 더 나은 방법으로
                <br />
                코드를 작성하기 위해 고민합니다.
              </motion.h3>
              <SecBImages initial="initial">
                <motion.img
                  variants={imgVariants}
                  whileInView="whileInView"
                  src={htmlLogo}
                  alt="HTML 로고"
                />
                <motion.img
                  variants={imgVariants}
                  whileInView="whileInView"
                  src={cssLogo}
                  alt="CSS 로고"
                />
                <motion.img
                  variants={imgVariants}
                  whileInView="whileInView"
                  src={jsLogo}
                  alt="JavaScript 로고"
                />
                <motion.img
                  variants={imgVariants}
                  whileInView="whileInView"
                  src={tsLogo}
                  alt="TypeScript 로고"
                />
                <motion.img
                  variants={imgVariants}
                  whileInView="whileInView"
                  src={reactLogo}
                  alt="React JS 로고"
                />
                <motion.img
                  variants={imgVariants}
                  whileInView="whileInView"
                  src={sassLogo}
                  alt="SASS 로고"
                />
              </SecBImages>
            </SectionB>
            <SectionC
              style={{
                minHeight:
                  windowSize.width < 1200
                    ? window.innerHeight * 0.6
                    : window.innerHeight * 0.4,
              }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                포트폴리오는 계속해서 업데이트 될 예정입니다.
              </motion.h3>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                공개한 프로젝트는{" "}
                <span
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/projects");
                  }}
                >
                  이 곳
                </span>
                에서 확인하실 수 있습니다.
              </motion.h3>
            </SectionC>
          </Container>
        </Wrapper>
      </AnimatePresence>
    </>
  );
}

export default Hyeongjin;
