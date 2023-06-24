import styled, { css } from 'styled-components';
import { typo, themeColor } from '../../utils/style';

export default styled.div<{ position: Position }>`
  ${typo('body')}
  color: ${themeColor('text')};
  box-shadow: ${({ theme }) => theme.shadow.long};
  border-radius: 4px;
  width: 128px;
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
