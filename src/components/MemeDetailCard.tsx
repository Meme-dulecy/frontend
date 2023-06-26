import React from "react";
import styled, { css } from "styled-components";

interface Props {
  isImage: boolean;
  handleMemeDetailCardClick?: () => void;
  children: React.ReactNode;
}

const MemeDetailCard = ({
  isImage,
  handleMemeDetailCardClick,
  children,
}: Props) => {
  return (
    <StyledInputCard isImage={isImage} onClick={handleMemeDetailCardClick}>
      {children}
    </StyledInputCard>
  );
};

interface InputCardProps {
  isImage: boolean;
}

const StyledInputCard = styled.div<InputCardProps>`
  width: 281px;
  height: 299px;
  position: relative;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
  }

  & .image-input {
    z-index: 10;
  }

  & .text-input {
    transform: rotateY(-180deg);
  }

  ${({ isImage }) =>
    !isImage &&
    css`
      transform: translateX(-100%) rotateY(-180deg);
    `}
`;

export default MemeDetailCard;
