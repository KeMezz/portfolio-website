import { AnimatePresence, motion, Variants } from "framer-motion";
import { url } from "inspector";
import { useNavigate, useParams } from "react-router-dom";
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
  /* height: 260px; */
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 1200px) {
    width: 90vw;
    height: auto;
  }
  img {
    width: 100%;
  }
`;

const ProjectDetailView = styled(motion.div)`
  z-index: 2;
  position: fixed;
  top: 12%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 700px;
  /* height: 90vh; */
  /* max-height: 850px; */
`;

const DetailTop = styled.div`
  width: 100%;
  padding: 2vw 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor.sub};
  img {
    width: 90%;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const DetailBottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor.deep};
  padding: 34px;
  line-height: 1.4;
  h5 {
    font-size: 22px;
    font-weight: 600;
  }
  h3 {
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 18px;
  }
  p {
    font-size: 18px;
  }
`;

const Skills = styled.div`
  padding-top: 18px;
  display: flex;
  gap: 18px;
  img {
    width: 30px;
  }
`;

const GithubLink = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 12px;
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 20px;
    font-size: 16px;
    color: ${(props) => props.theme.bgColor.main};
    background-color: ${(props) => props.theme.textColor.main};
    border-radius: 30px;
    i {
      font-size: 24px;
    }
  }
`;

const Overlay = styled(motion.div)`
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
`;

const gridVariatns: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
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
  const navigate = useNavigate();
  const { id } = useParams();
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
            <AnimatePresence>
              <ProjectItem
                layoutId={item.id + ""}
                key={item.id}
                variants={itemVariants}
                onClick={() => navigate(`/projects/vanilaJS/${item.id}`)}
              >
                <img src={item.thumbnail} alt={item.name} />
              </ProjectItem>
            </AnimatePresence>
          ))}
        </ProjectGrid>
      </Container>
      {vanilaJSData.map((item) =>
        item.id + "" === id ? (
          <AnimatePresence>
            <ProjectDetailView layoutId={item.id + ""}>
              <DetailTop>
                <img src={item.thumbnail} alt={item.name} />
              </DetailTop>
              <DetailBottom>
                <h5>Vanila JS</h5>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <Skills>
                  {item.stacks.map((eachStacks) => (
                    <img src={eachStacks} alt="logo" />
                  ))}
                </Skills>
                <GithubLink>
                  <div
                    className="github"
                    onClick={() => window.open(item.github)}
                  >
                    <i className="xi-github"></i>
                    <span>Github</span>
                  </div>
                  <div
                    className="website"
                    onClick={() => window.open(item.website)}
                  >
                    <i className="xi-link"></i>
                    <span>Open Website</span>
                  </div>
                </GithubLink>
              </DetailBottom>
            </ProjectDetailView>
            <Overlay
              onClick={() => navigate(-1)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </AnimatePresence>
        ) : null
      )}
    </>
  );
}
export default VanilaJS;
