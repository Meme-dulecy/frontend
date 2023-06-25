import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import FlipButton from "../components/FlipButton";
import MemeDetailCard from "../components/MemeDetailCard";
import ImageInput from "../components/ImageInput";
import TextInput from "../components/TextInput";

export default function MemeCreation() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(false);
  const [isImage, setIsImage] = useState(true);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setImage(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFlipButtonClick = () => {
    setIsImage((prev) => !prev);
  };

  return (
    <Container>
      <MemeDetailCard isImage={isImage}>
        <ImageInput handleImageChange={handleImageChange} />
        <TextInput text={text} handleChange={handleChange} />
      </MemeDetailCard>
      <FlipButton handleFlipButtonClick={handleFlipButtonClick} />
      <ButtonBackground>
        <MemeCreationButton disabled={!(text || image)}>
          밈 생성하기!
        </MemeCreationButton>
      </ButtonBackground>
    </Container>
  );
}

const Container = styled.div`
  perspective: 1200px; // for animation

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  width: 100%;
  height: 100vh;

  background-color: #faffe4;
`;

const ButtonBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 84px;
  background-color: #d9d9d9;
  position: fixed;
  bottom: 0;
`;

const MemeCreationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 308px;
  height: 43px;

  background-color: #ff99f8;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-family: Inter;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.44px;

  border: none;

  &:disabled {
    background-color: #a3a3a3;
  }
`;
