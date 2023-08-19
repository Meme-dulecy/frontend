import React, { useMemo } from "react";
import {
  DEFALUT__PROFILE_IMAGE,
  MEME_PROFILE_WIDTH_BY_SIZE,
} from "../../constants";
import Frame from "./styles";

interface ProfileImageProps {
  imageURL?: string;
  size: "S" | "M" | "L";
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imageURL, size }) => {
  const image = useMemo(
    () => (imageURL !== undefined ? imageURL : DEFALUT__PROFILE_IMAGE),
    [imageURL]
  );
  return (
    <Frame size={MEME_PROFILE_WIDTH_BY_SIZE[size]}>
      <img src={image} alt="user profile" />
    </Frame>
  );
};

export default ProfileImage;
