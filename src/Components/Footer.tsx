import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { windowSizeAtom } from "../atom";

const FooterContainer = styled.footer`
  width: 100%;
  height: calc(20vh - 3vw);
  background-color: ${(props) => props.theme.bgColor.sub};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-height: 80px;
  h3 {
    font-weight: 800;
    text-align: center;
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
  @media (max-width: 1200px) {
    height: 13vh;
    h3 {
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
  }
`;

function Footer() {
  const windowSize = useRecoilValue(windowSizeAtom);
  return (
    <FooterContainer
      style={{
        height:
          windowSize.width < 1200
            ? window.innerHeight * 0.13
            : window.innerHeight * 0.2 - window.innerWidth * 0.03,
      }}
    >
      <h3>FRONTEND DEVELOPER PORTFOLIO</h3>
      <p>Copyright 2022. Hyeong Jin. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
