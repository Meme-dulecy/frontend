import { useState, useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import MemeDetailCard from "../components/MemeDetailCard";
import Stickers from "../components/memeDetails/Stickers";
import NicknameBadge from "../components/memeDetails/NicknameBadge";
import useMemeDetail from "../hooks/queries/useMemeDetail";
import { useLocation, useNavigate } from "react-router-dom";

export const SelectedStickerState = atom({
  key: "SelectedStickerState",
  default: "",
});

const MemeDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  if (!state?.memeId) {
    alert("잘못된 접근입니다.");
    navigate(-1);
  }

  const [selectedSticker, setSelectedSticker] =
    useRecoilState(SelectedStickerState);

  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      e.stopPropagation();

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [isImage, setIsImage] = useState<boolean>(true);

  const { imgUrl, message, nickname, profileImg, stickers } = useMemeDetail(
    state?.memeId
  );

  const handleMemeDetailCardClick = () => {
    if (imgUrl === null || message === null) {
      return;
    }

    setIsImage((prev) => !prev);
  };

  return (
    <Container>
      <Whiteboard>
        <NicknameBadge profileImg={profileImg} nickname={nickname} />
        <MemeDetailCard
          isImage={isImage}
          handleMemeDetailCardClick={handleMemeDetailCardClick}
        >
          <StyledCardFront>
            {imgUrl ? (
              <StyledCardImage
                className="image-input"
                src={imgUrl}
                alt="input-meme"
                hasImgUrl={!!imgUrl}
                hasMessage={!!message}
              />
            ) : (
              <StyledCardText hasImgUrl={!!imgUrl} hasMessage={!!message}>
                {message}
              </StyledCardText>
            )}
          </StyledCardFront>
          {message && (
            <StyledCardText
              hasImgUrl={!!imgUrl}
              className="text-input"
              hasMessage={!!message}
            >
              {message}
            </StyledCardText>
          )}
        </MemeDetailCard>
      </Whiteboard>

      <Stickers />
      {Boolean(selectedSticker) && (
        <SelectedSticker
          src={selectedSticker}
          pos={mousePosition}
          onClick={() => {
            setSelectedSticker("");
          }}
        />
      )}
    </Container>
  );
};

interface StyledProps {
  hasImgUrl: boolean;
  hasMessage: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  background-color: #faffe4;
`;

const Whiteboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 552px;
  background: #fff;
  perspective: 1200px;
`;

const StyledCardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardImage = styled.img<StyledProps>`
  width: 281px;
  height: 299px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  object-fit: cover;
  ${({ hasImgUrl, hasMessage }) =>
    hasImgUrl &&
    hasMessage &&
    css`
      cursor: pointer;
    `}
`;

const StyledCardText = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  background: #d9d9d9;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  word-break: break-all;
  ${({ hasImgUrl, hasMessage }) =>
    hasImgUrl &&
    hasMessage &&
    css`
      cursor: pointer;
    `}
`;

const SelectedSticker = styled.img<{ pos: { x: number; y: number } }>`
  width: 40px;
  height: 40px;

  position: fixed;
  ${({ pos }) => `
    top: ${pos.y}px;
    left: ${pos.x}px;
  `}
  transform: translate(-50%, -50%);
`;

export default MemeDetail;
