import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  z-index: 100;
  div,
  footer {
    position: absolute;
    background-color: ${(props) => props.theme.bgColor.sub};
  }
  @media (max-width: 1200px) {
    div {
      display: none;
    }
  }
`;

const Top = styled.div`
  width: 100vw;
  height: 3vw;
  top: 0;
  left: 0;
`;
const Left = styled.div`
  width: 3vw;
  left: 0;
  height: 100vh;
`;
const Right = styled.div`
  width: 3vw;
  right: 0;
  height: 100vh;
`;
const Footer = styled.footer`
  width: 100vw;
  height: 11vw;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4vw;
  h3 {
    font-size: 1.8vw;
    font-weight: 800;
  }
  p {
    font-size: 0.8vw;
  }
  @media (max-width: 1200px) {
    height: 100px;
    gap: 8px;
    h3 {
      text-align: center;
      font-size: 18px;
    }
    p {
      font-size: 10px;
    }
  }
  @media (max-width: 320px) {
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 8px;
    }
  }
`;

function Frame() {
  return (
    <>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Top />
        <Left />
        <Right />
        <Footer>
          <h3>FRONTEND DEVELOPER PORTFOLIO</h3>
          <p>Copyright 2022. Hyeong Jin. All rights reserved.</p>
        </Footer>
      </Container>
    </>
  );
}

export default Frame;
