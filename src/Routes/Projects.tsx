import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Title from "../Components/Title";

export const Container = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-content: center;
  height: calc(85vh - 14vw);
  gap: 6vw;
  @media (max-width: 1200px) {
    gap: 8vh;
  }
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const ProjectCategory = styled(motion.div)`
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
    min-width: 200px;
    max-width: 300px;
    padding: 3.6vw 0;
  }
  @media (max-width: 769px) {
    width: 50vw;
    border-top: solid 3px ${(props) => props.theme.textColor.main};
    border-bottom: solid 3px ${(props) => props.theme.textColor.main};
  }
`;

export const Text = styled(motion.div)``;

export const pcVariants: Variants = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1, transition: { duration: 0.5, delay: 0.5 } },
  hover: {
    borderTopColor: "crimson",
    borderBottomColor: "crimson",
    transition: { duration: 0.3 },
  },
};

export const textVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
};

function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <Title titleName="projects" />
      <Container initial="initial" animate="animate">
        <ProjectCategory
          variants={pcVariants}
          onClick={() => navigate("/projects/vanilaJS")}
        >
          <Text variants={textVariants}>
            <h2>Vanila JS</h2>
            <h4>바닐라 JS 프로젝트</h4>
          </Text>
        </ProjectCategory>
        <ProjectCategory
          variants={pcVariants}
          onClick={() => navigate("/projects/reactJS")}
        >
          <Text variants={textVariants}>
            <h2>React JS</h2>
            <h4>리액트 프로젝트</h4>
          </Text>
        </ProjectCategory>
        <ProjectCategory
          variants={pcVariants}
          onClick={() => navigate("/projects/css")}
        >
          <Text variants={textVariants}>
            <h2>CSS Only</h2>
            <h4>CSS 마크업 클론</h4>
          </Text>
        </ProjectCategory>
      </Container>
    </>
  );
}

export default Projects;
