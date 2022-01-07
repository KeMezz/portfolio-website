import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { windowSizeAtom } from "../atom";
import Title from "../Components/Title";
import jsLogo from "../Images/logo-js.png";
import reactLogo from "../Images/logo-react.png";
import scssLogo from "../Images/logo-scss.png";
import tsLogo from "../Images/logo-typescript.png";

const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor.main};
`;

const SkillsGrid = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 10vw;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const SkillsItem = styled(motion.img)`
  cursor: grab;
  width: 150px;
  @media (max-width: 700px) {
    width: 80px;
  }
`;

const ResetBtn = styled.button``;

const gridVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    rotateZ: 360,
    transition: { duration: 1.5, type: "spring" },
  },
};

function Skills() {
  const windowSize = useRecoilValue(windowSizeAtom);
  return (
    <>
      <Helmet>
        <title>Skills | 형진 포트폴리오</title>
      </Helmet>
      <Container
        layoutId="whitebox"
        style={{
          height:
            windowSize.width < 1200
              ? window.innerHeight * 0.87
              : window.innerHeight * 0.8,
        }}
      >
        <Title titleName="skills" />
        <SkillsGrid variants={gridVariants} initial="initial" animate="animate">
          <SkillsItem
            drag
            dragSnapToOrigin
            variants={itemVariants}
            src={jsLogo}
            alt="자바스크립트 로고"
          ></SkillsItem>
          <SkillsItem
            drag
            dragSnapToOrigin
            variants={itemVariants}
            src={reactLogo}
            alt="리액트 로고"
          ></SkillsItem>
          <SkillsItem
            drag
            dragSnapToOrigin
            variants={itemVariants}
            src={scssLogo}
            alt="SASS 로고"
          ></SkillsItem>
          <SkillsItem
            drag
            dragSnapToOrigin
            variants={itemVariants}
            src={tsLogo}
            alt="SASS 로고"
          ></SkillsItem>
        </SkillsGrid>
      </Container>
    </>
  );
}

export default Skills;
