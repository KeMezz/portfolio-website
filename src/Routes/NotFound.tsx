import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { windowSizeAtom } from "../atom";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 50px;
    font-weight: 900;
  }
  h3 {
    padding-top: 30px;
    font-size: 20px;
    font-weight: 600;
    a {
      color: crimson;
      cursor: pointer;
    }
  }
`;

function NotFound() {
  const windowSize = useRecoilValue(windowSizeAtom);
  return (
    <Container
      style={{
        minHeight:
          windowSize.width < 1200
            ? window.innerHeight * 0.87
            : window.innerHeight * 0.8,
      }}
    >
      <h1>404 Not Found</h1>
      <h3>
        Back to <Link to="/">Home</Link>
      </h3>
    </Container>
  );
}

export default NotFound;
