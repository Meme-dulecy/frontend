import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FlipButton from "../components/FlipButton";
import MemeDetailCard from "../components/MemeDetailCard";
import MemeImageInput from "../components/MemeCreation/MemeImageInput";
import MemeTextInput from "../components/MemeCreation/MemeTextInput";
import { getCookie } from "../utils/cookie";
import createMeme from "../utils/createMeme";

export default function MemeCreation() {
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<{
    name: string;
    file: null | File;
  }>({
    name: "",
    file: null,
  });
  const [isImage, setIsImage] = useState(true);
  const navigate = useNavigate();
  const token = getCookie("accessToken");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files.length) return;

    const file = e.target.files[0];

    setImage({
      name: file.name,
      file,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFlipButtonClick = () => {
    setIsImage((prev) => !prev);
  };

  const handleMemeCreationButtonClick = async () => {
    if (token === undefined) {
      alert("로그인을 해주세요!");
      navigate("/");
      return;
    }

    const { result, errMsg, errCode } = await createMeme(image, text, token);

    if (!result && errMsg) {
      console.error("밈 생성 시 에러 발생", result, errMsg, errCode);

      if (errCode === "01-1") {
        alert("유효하지 않은 이미지 입니다!");
      }

      if (errCode === "02-1") {
        alert("로그인을 다시 시도해주세요!");
      }
    }

    if (!result && errCode) {
      return;
    }

    alert("밈카드 생성 성공!");
    navigate("/");
  };

  const hasImageAttached = Boolean(image.name);
  // const hasText = Boolean(text);

  return (
    <Container>
      <MemeDetailCard isImage={isImage}>
        <MemeImageInput handleImageChange={handleImageChange} />
        <MemeTextInput text={text} handleChange={handleChange} />
      </MemeDetailCard>

      <FlipButton handleFlipButtonClick={handleFlipButtonClick} />

      <ButtonBackground>
        <MemeCreationButton
          // disabled={!(hasText || !!hasImageAttached)}
          disabled={hasImageAttached ? false : true}
          onClick={handleMemeCreationButtonClick}
        >
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
  height: 100svh;
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
  cursor: pointer;

  border: none;

  &:disabled {
    cursor: auto;
    background-color: #a3a3a3;
  }
`;
