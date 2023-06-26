import React, { useMemo } from 'react'
import { DEFALUT__PROFILE_IMAGE } from '../../constants';
import Frame from './styles';

interface ProfileImageProps {
  imageURL?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imageURL }) => {
  const image = useMemo(() => imageURL !== undefined ? imageURL : DEFALUT__PROFILE_IMAGE, [imageURL]);
  return (
    <Frame>
      <img src={image} alt="user profile" />
    </Frame>
  )
}

export default ProfileImage;