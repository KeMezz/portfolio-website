import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5vw;
  text-transform: uppercase;
  font-size: 4vw;
  font-weight: 900;
  overflow: hidden;
  @media (max-width: 1200px) {
    font-size: calc(20px + 4vw);
    padding-top: 8vh;
  }
`;

const TitleHollow = styled(motion.span)`
  color: ${(props) => props.theme.bgColor.main};
  text-shadow: -1px -1px 0 ${(props) => props.theme.textColor.sub},
    1px -1px 0 ${(props) => props.theme.textColor.sub},
    -1px 1px 0 ${(props) => props.theme.textColor.sub},
    1px 1px 0 ${(props) => props.theme.textColor.sub};
`;

const TitleBold = styled(motion.span)`
  position: absolute;
  text-shadow: none;
  color: ${(props) => props.theme.textColor.main};
`;

interface titleProps {
  titleName: string;
}

function Title({ titleName }: titleProps) {
  return (
    <Container>
      <TitleHollow initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {titleName}
      </TitleHollow>
      <TitleBold
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{
          opacity: 1,
          x: -5,
          y: -5,
          transition: { delay: 0.5, duration: 0.5 },
        }}
      >
        {titleName}
      </TitleBold>
    </Container>
  );
}

export default Title;
