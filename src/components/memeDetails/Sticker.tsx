import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { SelectedStickerState } from "../../pages/MemeDetails";

const Sticker = ({ src }: { src: string }) => {
  const setSelectedSticker = useSetRecoilState(SelectedStickerState);

  const [isDetached, setIsDetached] = useState(false);

  const handleStickerClick = (stickerSource: string) => () => {
    if (isDetached) return;

    setIsDetached((prev) => !prev);
    setSelectedSticker(stickerSource);
  };

  return (
    <Container
      src={src}
      isDetached={isDetached}
      onClick={handleStickerClick(src)}
    />
  );
};

const Container = styled.img<{ isDetached: boolean }>`
  width: 40px;
  height: 40px;

  margin-right: 20px;
  cursor: pointer;

  transition: filter 0.5s;

  ${({ isDetached }) => `
    ${
      isDetached &&
      `
      filter: saturate(0);
    `
    }
  `}
`;

export default Sticker;
