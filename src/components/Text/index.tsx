import React from 'react'
import StyledSpan, { type TextStyleProps } from './styles';

type TextProps = React.HTMLAttributes<HTMLSpanElement> & TextStyleProps;

const Text: React.FC<TextProps> = ({ className, ...props }) => <StyledSpan className={className} {...props} />;

export default Text;