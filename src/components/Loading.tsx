import styled from "styled-components";

interface Props {
  message: string;
}

const Loading = ({ message }: Props) => {
  return <Container>{message}</Container>;
};

const Container = styled.div`
  width: 100vw;
  height: 100svh;

  background-color: #fff;

  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  place-items: center;
`;

export default Loading;
