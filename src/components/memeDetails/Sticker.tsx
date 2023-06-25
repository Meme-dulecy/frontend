import { useState } from "react";
import styled from "styled-components";

const Sticker = ({ src }: { src: string }) => {
  const [isDetached, setIsDetached] = useState(false);

  const handleStickerClick = () => {
    setIsDetached((prev) => !prev);
  };

  return (
    <Container src={src} isDetached={isDetached} onClick={handleStickerClick} />
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
