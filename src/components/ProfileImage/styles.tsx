import styled from "styled-components";

export default styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
