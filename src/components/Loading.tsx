import styled from "styled-components";
import { typo } from "../utils/style";

const Loading = () => {
  return (
    <Container>
      <Logo>Meme</Logo>
      <span>LOADING..</span>
    </Container>
  );
};

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;
  background-color: gainsboro;
  color: violet;
  font-weight: 700;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes fade {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  animation: fade 0.5s;
`;

const Logo = styled.span`
  @keyframes test {
    0% {
      transform: rotate3d(-1, 1, -2, 0deg);
    }
    100% {
      transform: rotate3d(1, -1, 1, 360deg);
    }
  }

  animation: test 2s infinite;
  color: violet;
  ${typo("logo")};

  margin-bottom: 50px;
`;

export default Loading;
