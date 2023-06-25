import React, { useLayoutEffect, useRef, useState } from 'react'
import Container from './styles';
import Meme from '../../../components/Meme';
import { formatMemes } from './meta';
import { useInterval } from 'react-use';

interface MemeListProps {
  memes: Meme[];
}

const MemeList: React.FC<MemeListProps> = ({ memes }) => {
  const [hasRenderedFirst, setHasRenderedFirst] = useState(false);
  const [_memes, setMemes] = useState<Meme[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useInterval(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;
    setMemes(prev => {
      return [...prev].map((meme) => {
      if (!meme.position) return meme;
      const { x, y } = meme.position;
      return { ...meme, position: { x, y: y + 9 } };
    })})
  }, 3000);

  useLayoutEffect(() => {
    if (!hasRenderedFirst) {
      setHasRenderedFirst(true);
    }
    let memeElements: Element[] = [];
    const containerElement = containerRef.current;
    if (containerElement) {
      memeElements = Array.from<Element>(containerElement.querySelectorAll('[data-ref="meme"]'));
    };
    const newMemes = formatMemes(memes, memeElements);
    setMemes(newMemes);
  }, [memes, hasRenderedFirst]);

  useLayoutEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;
    const memeElements = Array.from<Element>(containerElement.querySelectorAll('[data-ref="meme"]'));
    const totalHeight = memeElements.reduce((sum, element) => sum + element.getBoundingClientRect().height, 0);
    containerElement.style.setProperty('height', totalHeight + 20 + 'px');
  }, [_memes])

  return (
    <Container ref={containerRef}>
      {
        _memes.map(({ id, owner, ownerProfileURL, imageURL, text, position = { x: 0, y: 0 }, createdTime, size }) => 
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
