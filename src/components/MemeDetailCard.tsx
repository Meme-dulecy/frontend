import React from 'react';
import styled, { css } from 'styled-components';
import ImageInput from './ImageInput';
import TextInput from './TextInput';

interface Props {
  isImage: boolean;
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MemeDetailCard = ({ isImage, text, handleChange }: Props) => {
  return (
    <StyledInputCard isImage={isImage}>
      <ImageInput />
      <TextInput text={text} handleChange={handleChange} />
    </StyledInputCard>
  );
}

interface InputCardProps {
  isImage: boolean;
};

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
