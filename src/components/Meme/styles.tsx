import styled from "styled-components";
import { typo, themeColor } from "../../utils/style";
import { MEME_WIDTH_BY_SIZE } from "../../constants";

export default styled.div.attrs<{ position: Position; size: Meme["size"] }>(
  ({ size, position }) => ({
    style: {
      width: MEME_WIDTH_BY_SIZE[size] + "px",
      transform: `translate(${position.x}px, -${position.y}px)`,
    },
  })
)`
  ${typo("body")}
  color: ${themeColor("text")};
  border-radius: 4px;
  position: absolute;
  transition: transform 1s linear;
  bottom: 0;
`;

export const FloatBox = styled.div.attrs<{ delay: number }>(({ delay }) => ({
  style: {
    animation: `6s linear ${delay}ms infinite ${
      delay % 2 === 0 ? "" : "reverse"
    } float`,
  },
}))`
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadow.long};

  @keyframes float {
    0% {
      transform: translate(0%, 0%);
    }
    12.5% {
      transform: translate(0.5%, 1%);
    }
    25% {
      transform: translate(1%, 0%);
    }
    37.5% {
      transform: translate(0.5%, -1%);
    }
    50% {
      transform: translate(0%, 0%);
    }
    62.5% {
      transform: translate(-0.5%, 1%);
    }
    75% {
      transform: translate(-1%, 0%);
    }
    87.5% {
      transform: translate(-0.5%, -1%);
    }
    100% {
      transform: translate(0%, 0%);
    }
  }
`;

export const MemeFrame = styled.div`
  overflow: hidden;
  img {
    display: block;
    width: 100%;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
`;
