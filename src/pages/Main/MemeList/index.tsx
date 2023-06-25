import React, { useMemo, useState } from 'react'
import Container from './styles';
import Meme from '../../../components/Meme';
import { findPosition, byCreatedTime } from './meta';

interface MemeListProps {
  memes: Meme[];
}

const MemeList: React.FC<MemeListProps> = ({ memes }) => {
  const [memeList, setMemeList] = useState(memes.sort(byCreatedTime));

  const formattedMemes = useMemo(() => {
    return memeList.map((meme, i, memes) => {
      return {
        ...meme,
        position: findPosition(meme, memes),
      };
    });
  }, [memeList]);

  return (
    <Container>
      {
        formattedMemes.map(({ id, owner, ownerProfileURL, imageURL, text, position, size }) => 
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