import React from 'react'
import Container from './styles';
import Meme from '../../../components/Meme';

interface MemeListProps {
  memes: Meme[];
}

const MemeList: React.FC<MemeListProps> = ({ memes }) => {
  return (
    <Container>
      {
        memes.map(({ id, owner, ownerProfileURL, imageURL, text, position }) => 
          <Meme
            key={id}
            imageURL={imageURL}
            text={text}
            owner={owner}
            ownerProfileURL={ownerProfileURL}
            position={position}
          />
        )
      }
    </Container>
  )
}

export default MemeList;