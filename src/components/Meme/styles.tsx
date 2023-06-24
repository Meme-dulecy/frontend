import styled, { css } from 'styled-components';
import { typo, themeColor } from '../../utils/style';

const WIDTH_BY_SIZE: Record<Meme['size'], number> = {
  S: 80,
  M: 150,
  L: 200,
};


export default styled.div<{ position: Position, size: Meme['size'] }>`
  ${typo('body')}
  color: ${themeColor('text')};
  box-shadow: ${({ theme }) => theme.shadow.long};
  border-radius: 4px;
  width: ${({ size }) => WIDTH_BY_SIZE[size] + 'px'};
  position: absolute;
  ${({ position }) => css`
    top: ${position.x};
    left: ${position.y};
  `}
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
