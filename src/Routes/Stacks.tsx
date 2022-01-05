import Title from "../Components/Title";
import {
  Container,
  pcVariants,
  ProjectCategory,
  Text,
  textVariants,
} from "./Projects";

function Stacks() {
  return (
    <>
      <Title titleName="stacks" />
      <Container initial="initial" animate="animate">
        <ProjectCategory variants={pcVariants}>
          <Text variants={textVariants}>
            <h2>Vanila JS</h2>
            <h4>ES6 and more..</h4>
          </Text>
        </ProjectCategory>
        <ProjectCategory variants={pcVariants}>
          <Text variants={textVariants}>
            <h2>React JS</h2>
            <h4>Recoil and more..</h4>
          </Text>
        </ProjectCategory>
        <ProjectCategory variants={pcVariants}>
          <Text variants={textVariants}>
            <h2>HTML, CSS</h2>
            <h4>SCSS and more..</h4>
          </Text>
        </ProjectCategory>
      </Container>
    </>
  );
}

export default Stacks;
