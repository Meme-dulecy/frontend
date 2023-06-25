import React, { useLayoutEffect, useState } from 'react'
import Container from './styles';
import Meme from '../../../components/Meme';
import { byCreatedTime, formatMemes } from './meta';

interface MemeListProps {
  memes: Meme[];
}

const MemeList: React.FC<MemeListProps> = ({ memes }) => {
  const [_memes, setMemes] = useState<Meme[]>([]);

  useLayoutEffect(() => {
    const newMemes = formatMemes(memes.sort(byCreatedTime));
    setMemes(newMemes);
  }, [memes]);

  return (
    <Container>
      {
        _memes.map(({ id, owner, ownerProfileURL, imageURL, text, position = { x: 0, y: 0 }, size }) => 
          <Meme
            key={id}
            imageURL={imageURL}
            text={text}
            owner={owner}
            ownerProfileURL={ownerProfileURL}
            position={position}
            size={size}
          />
        )
      }
    </Container>
  )
}

export default MemeList;