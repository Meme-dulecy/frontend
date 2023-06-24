import { css, styled } from 'styled-components';
import ImageInput from '../components/ImageInput';
import FlipButton from '../components/FlipButton';
import TextInput from '../components/TextInput';
import { ChangeEvent, useState } from 'react';

export default function MemeCreation() {
  const [text, setText] = useState('');
  const [isImage, setIsImage] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFlipButtonClick = () => {
    setIsImage((prev) => !prev);
  };

  return (
    <StyledMemeCreation>
      <StyledInputCard isImage={isImage}>
        <ImageInput />
        <TextInput text={text} handleChange={handleChange} />
      </StyledInputCard>
      <FlipButton handleFlipButtonClick={handleFlipButtonClick} />
    </StyledMemeCreation>
  );
}

type InputCardProps = {
  isImage: boolean;
};

const StyledMemeCreation = styled.div`
  perspective: 1200px;
`;

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
