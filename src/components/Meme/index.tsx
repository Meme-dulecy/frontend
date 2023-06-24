import React, { useMemo } from 'react'
import Text from '../Text';
import { DEFALUT_IMAGE } from '../../constants';
import ProfileImage from '../ProfileImage';
import Frame, { Footer, MemeFrame } from './styles';

interface MemeProps {
  imageURL?: string;
  text?: string;
  owner: string;
  ownerProfileURL?: string;
  position: Position;
  size: Meme['size'];
};

const Meme: React.FC<MemeProps> = ({ imageURL, text, owner, ownerProfileURL, position, size }) => {
  const meme = useMemo(() => {
    const [hasImage, hasText] = [imageURL != null, text != null];
    if (hasImage) {
      return <img src={imageURL} alt={text} />;
    } else if (hasText) {
      return <Text size="detail">{text}</Text>;
    } else {
      return <img src={DEFALUT_IMAGE} alt={text} />;
    }
  }, [imageURL, text]);
  return (
    <Frame position={position} size={size}>
      <MemeFrame>
        {meme}
      </MemeFrame>
      <Footer>
        <ProfileImage imageURL={ownerProfileURL} />
        <Text size="detail">{owner}</Text>
      </Footer>
    </Frame>
  )
}

export default Meme;