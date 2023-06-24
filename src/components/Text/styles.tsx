import styled from 'styled-components';
import { type Typography, typo } from '../../utils/style';

export interface TextStyleProps {
  size: Typography;
  type?: keyof typeof typeMap;
};

export default styled.span<TextStyleProps>`
  ${({ size }) => typo(size)};

  display: ${({ type, size }) => {
    if (type !== undefined) return typeMap[type];
    switch (size){
      case 'body':
      case 'detail':
        return typeMap.inline;
      case 'heading1':
      case 'heading2':
      case 'heading3':
      case 'heading4':
        return typeMap.block;
    }
    }};
`;

const typeMap = {
  inline: 'inline-block',
  block: 'block',
} as const;