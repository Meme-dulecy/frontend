import styled, { css } from 'styled-components';
import { typo, themeColor } from '../../utils/style';
import { MEME_WIDTH_BY_SIZE } from '../../constants';

export default styled.div<{ position: Position, size: Meme['size'], delay: number }>`
  ${typo('body')}
  color: ${themeColor('text')};
  box-shadow: ${({ theme }) => theme.shadow.long};
  border-radius: 4px;
  width: ${({ size }) => MEME_WIDTH_BY_SIZE[size] + 'px'};
  position: absolute;
  background: #fff;
  ${({ position }) => css`
    left: ${position.x}px;
    bottom: ${position.y}px;
  `}

  animation: 6s linear ${({ delay }) => delay + 'ms'} infinite ${({ delay }) => delay % 2 === 0 ? '' : 'reverse'} float;

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
