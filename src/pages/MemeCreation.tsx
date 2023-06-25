import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import FlipButton from "../components/FlipButton";
import MemeDetailCard from "../components/MemeDetailCard";
import ImageInput from "../components/ImageInput";
import TextInput from "../components/TextInput";

export default function MemeCreation() {
  const [text, setText] = useState("");
  const [isImage, setIsImage] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFlipButtonClick = () => {
    setIsImage((prev) => !prev);
  };

  return (
    <StyledMemeCreation>
      <MemeDetailCard isImage={isImage}>
        <ImageInput />
        <TextInput text={text} handleChange={handleChange} />
      </MemeDetailCard>
      <FlipButton handleFlipButtonClick={handleFlipButtonClick} />
    </StyledMemeCreation>
  );
}

const StyledMemeCreation = styled.div`
  perspective: 1200px;
`;
