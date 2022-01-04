import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import Title from "../../Components/Title";
import { vanilaJSData } from "../../portfolio";

const Container = styled.div`
  height: auto;
`;

const ProjectGrid = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(85vh - 14vw);
  gap: 2vw;
  @media (max-width: 1200px) {
    height: fit-content;
    flex-direction: column;
    margin-top: 8vh;
  }
`;
const ProjectItem = styled(motion.div)`
  place-self: center;
  width: 400px;
  height: 260px;
  @media (max-width: 1200px) {
    width: 90vw;
    height: auto;
  }
  img {
    width: 100%;
  }
`;

const gridVariatns: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const itemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function VanilaJS() {
  return (
    <>
      <Container>
        <Title titleName="Vanila JS" />
        <ProjectGrid
          variants={gridVariatns}
          initial="initial"
          animate="animate"
        >
          {vanilaJSData.map((item) => (
            <ProjectItem key={item.id} variants={itemVariants}>
              <img src={item.thumbnail} alt="" />
            </ProjectItem>
          ))}
        </ProjectGrid>
      </Container>
    </>
  );
}
export default VanilaJS;
