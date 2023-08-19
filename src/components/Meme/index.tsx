import React, { useMemo } from "react";
import Text from "../Text";
import { DEFALUT_IMAGE } from "../../constants";
import ProfileImage from "../ProfileImage";
import Frame, { FloatBox, Footer, MemeFrame } from "./styles";
import { randomInt } from "../../utils/math";
import { Link } from "react-router-dom";
import { DefaultTheme } from "styled-components/dist/types";

interface MemeProps {
  imageURL?: string;
  text?: string;
  owner: string;
  ownerProfileURL?: string;
  position: Position;
  size: Meme["size"];
  memeId: string;
}

const Meme: React.FC<MemeProps> = ({
  imageURL,
  text,
  owner,
  ownerProfileURL,
  position,
  size,
  memeId,
}) => {
  const meme = useMemo(() => {
    const [hasImage, hasText] = [imageURL != null, text != null];
    if (hasImage) {
      return <img src={imageURL} alt={text} />;
    } else if (hasText) {
      return <Text size={textSizeMap[size]}>{text}</Text>;
    } else {
      return <img src={DEFALUT_IMAGE} alt={text} />;
    }
  }, [imageURL, text, size]);

  const animationDelay = useMemo(() => randomInt(1000, 0, 100), []);

  return (
    <Link to={"/detail"} state={{ memeId }}>
      <Frame data-ref="meme" position={position} size={size}>
        <FloatBox delay={animationDelay}>
          <MemeFrame>{meme}</MemeFrame>
          <Footer>
            <ProfileImage imageURL={ownerProfileURL} size={size} />
            <Text size={textSizeMap[size]}>{owner}</Text>
          </Footer>
        </FloatBox>
      </Frame>
    </Link>
  );
};

const textSizeMap: {
  L: keyof DefaultTheme["typography"];
  M: keyof DefaultTheme["typography"];
  S: keyof DefaultTheme["typography"];
} = {
  L: "detail1",
  M: "detail2",
  S: "detail3",
};

export default Meme;
