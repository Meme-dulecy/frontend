import React, { useMemo } from 'react'
import Text from '../Text';
import { DEFALUT_IMAGE } from '../../constants';
import ProfileImage from '../ProfileImage';
import Frame, { FloatBox, Footer, MemeFrame } from './styles';
import { randomInt } from '../../utils/math';

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

  const animationDelay = useMemo(() => randomInt(1000, 0, 100), []);
  return (
    <Frame data-ref="meme" position={position} size={size}>
      <FloatBox delay={animationDelay}>
        <MemeFrame>
          {meme}
        </MemeFrame>
        <Footer>
          <ProfileImage imageURL={ownerProfileURL} />
          <Text size="detail">{owner}</Text>
        </Footer>
      </FloatBox>
    </Frame>
  )
}

export default Meme;