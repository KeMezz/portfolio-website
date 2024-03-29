import { AnimatePresence, motion, Variants } from "framer-motion";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { windowSizeAtom } from "../atom";
import Title from "../Components/Title";
import { portfolioData } from "../portfolio";
import ReactGA from "react-ga4";

const Container = styled(motion.section)`
  background-color: ${(props) => props.theme.bgColor.main};
  width: 100%;
  padding-bottom: 40px;
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, auto));
  padding: 0 50px;
  gap: 60px;
  margin: 60px 0;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    gap: 30px;
    padding: 0 30px;
  }
  @media (max-width: 520px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, auto));
    padding: 0 20px;
    gap: 20px;
  }
`;

const ProjectItem = styled(motion.div)`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  img {
    width: 100%;
  }
`;

const ProjectDetailView = styled(motion.div)`
  z-index: 2;
  position: fixed;
  top: 14%;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 700px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
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
  @media (max-width: 1200px) {
    padding: 20px 0;
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
    font-weight: 500;
  }
  h3 {
    font-size: 40px;
    font-weight: 700;
  }
  @media (max-width: 1200px) {
    padding: 20px;
    h5 {
      font-size: 16px;
    }
    h3 {
      font-size: 28px;
    }
  }
  @media (max-width: 520px) {
    h5 {
      font-size: 14px;
    }
    h3 {
      font-size: 18px;
    }
  }
`;

const Skills = styled.div`
  padding-top: 18px;
  display: flex;
  gap: 18px;
  img {
    width: 30px;
  }
  @media (max-width: 1200px) {
    gap: 12px;
    img {
      width: 20px;
    }
  }
`;

const GithubLink = styled.div`
  padding-top: 30px;
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
  @media (max-width: 1200px) {
    gap: 6px;
    div {
      padding: 6px 12px;
      font-size: 14px;
      i {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 520px) {
    padding-top: 20px;
    div {
      padding: 4px 8px;
      padding-right: 12px;
    }
  }
`;

const OnDevAlert = styled.div`
  padding-top: 30px;
  display: flex;
  color: crimson;
  font-weight: 600;
  justify-content: center;
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

const GoHome = styled(motion.div)`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border: solid 3px ${(props) => props.theme.textColor.main};
  width: fit-content;
  border-radius: 12px;
  padding: 12px 30px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 1200px) {
    border: solid 2px ${(props) => props.theme.textColor.main};
    padding: 8px 20px;
    font-size: 16px;
    font-weight: 500;
  }
`;

const gridVariatns: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
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

function Projects() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const windowSize = useRecoilValue(windowSizeAtom);
  return (
    <>
      <Helmet>
        <title>Projects | 형진 포트폴리오</title>
      </Helmet>
      <Container
        style={{
          minHeight:
            windowSize.width < 1200
              ? window.innerHeight * 0.87
              : window.innerHeight * 0.8,
        }}
      >
        <Title titleName="projects" />
        <ProjectGrid
          variants={gridVariatns}
          initial="initial"
          animate="animate"
        >
          {portfolioData.map((item) => (
            <AnimatePresence key={item.id}>
              <ProjectItem
                layoutId={item.id + ""}
                key={item.id}
                variants={itemVariants}
                onClick={() => {
                  ReactGA.event({
                    category: "Click Project",
                    action: `${item.name} 프로젝트 클릭`,
                  });
                  navigate(`/projects/${item.id}`);
                }}
              >
                <img
                  style={{ opacity: item.isPublished ? 1 : 0.5 }}
                  src={item.thumbnail}
                  alt={item.name}
                />
              </ProjectItem>
            </AnimatePresence>
          ))}
        </ProjectGrid>
        <GoHome
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          onClick={() => {
            ReactGA.event({
              category: "Click Internal Link",
              action: "프로젝트 페이지에서 홈 페이지 클릭",
            });
            navigate("/");
          }}
        >
          <h3>홈으로 돌아가기</h3>
        </GoHome>
      </Container>
      {portfolioData.map((item) =>
        item.id + "" === projectId ? (
          <AnimatePresence key={item.id}>
            <ProjectDetailView layoutId={item.id + ""} key={item.id + ""}>
              <DetailTop>
                <img
                  style={{ opacity: item.isPublished ? 1 : 0.5 }}
                  src={item.thumbnail}
                  alt={item.name}
                />
              </DetailTop>
              <DetailBottom>
                <h5>{item.category}</h5>
                <h3>{item.name}</h3>
                <Skills>
                  {item.stacks.map((eachStacks, index) => (
                    <img key={index} src={eachStacks} alt="logo" />
                  ))}
                </Skills>
                {item.isPublished ? (
                  <GithubLink>
                    <div
                      className="github"
                      onClick={() => {
                        ReactGA.event({
                          category: "Click Project",
                          action: `${item.name} 프로젝트의 깃허브 링크 열람`,
                        });
                        window.open(item.github);
                      }}
                    >
                      <i className="xi-github"></i>
                      <span>Github</span>
                    </div>
                    <div
                      className="website"
                      onClick={() => {
                        ReactGA.event({
                          category: "Click Project",
                          action: `${item.name} 프로젝트의 웹사이트 링크 열람`,
                        });
                        window.open(item.website);
                      }}
                    >
                      <i className="xi-external-link"></i>
                      <span>Visit Website</span>
                    </div>
                  </GithubLink>
                ) : (
                  <OnDevAlert>
                    <h1>현재 개발 중입니다</h1>
                  </OnDevAlert>
                )}
              </DetailBottom>
            </ProjectDetailView>
            <Overlay
              key="overlay"
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

export default Projects;
