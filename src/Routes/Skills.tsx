import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import Title from "../Components/Title";

const Container = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-content: center;
  height: calc(85vh - 14vw);
  gap: 6vw;
  @media (max-width: 1200px) {
    gap: 8vh;
    height: auto;
    margin-top: 14vh;
    flex-direction: column;
    margin-bottom: 10vh;
  }
`;

const SkillsCategory = styled(motion.div)`
  cursor: pointer;
  place-self: center;
  border-top: solid 5px ${(props) => props.theme.textColor.main};
  border-bottom: solid 5px ${(props) => props.theme.textColor.main};
  min-width: 320px;
  padding: 40px 50px;
  text-align: center;
  h2 {
    font-size: calc(16px + 1vw);
    font-weight: 600;
    padding-bottom: 18px;
  }
  h4 {
    font-size: calc(10px + 0.8vw);
  }
  @media (max-width: 1200px) {
    min-width: 300px;
    max-width: 400px;
    padding: 3.6vw 0;
    border-top: solid 3px ${(props) => props.theme.textColor.main};
    border-bottom: solid 3px ${(props) => props.theme.textColor.main};
  }
  @media (max-width: 769px) {
    min-width: auto;
    width: 60vw;
    h2 {
      padding-bottom: 3vw;
    }
  }
`;

const Text = styled(motion.div)``;

const pcVariants: Variants = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1, transition: { duration: 0.5, delay: 0.5 } },
  hover: {
    borderTopColor: "crimson",
    borderBottomColor: "crimson",
    transition: { duration: 0.3 },
  },
};

const textVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
};

function Skills() {
  return (
    <>
      <Title titleName="skills" />
      <Container initial="initial" animate="animate">
        <SkillsCategory variants={pcVariants}>
          <Text variants={textVariants}>
            <h2>Vanila JS</h2>
            <h4>ES6 and more..</h4>
          </Text>
        </SkillsCategory>
        <SkillsCategory variants={pcVariants}>
          <Text variants={textVariants}>
            <h2>React JS</h2>
            <h4>Recoil and more..</h4>
          </Text>
        </SkillsCategory>
        <SkillsCategory variants={pcVariants}>
          <Text variants={textVariants}>
            <h2>HTML, CSS</h2>
            <h4>SCSS and more..</h4>
          </Text>
        </SkillsCategory>
      </Container>
    </>
  );
}

export default Skills;
