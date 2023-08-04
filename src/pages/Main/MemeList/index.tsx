import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Container from "./styles";
import Meme from "../../../components/Meme";
import { formatMemes } from "./meta";
import { useInterval } from "react-use";

interface MemeListProps {
  memes: Meme[];
}

const MemeList: React.FC<MemeListProps> = ({ memes }) => {
  const [hasRenderedFirst, setHasRenderedFirst] = useState(false);
  const [_memes, setMemes] = useState<Meme[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useInterval(() => {
    if (_memes.length === 0 || !hasRenderedFirst) return;

    const containerElement = containerRef.current;

    if (!containerElement) return;

    setMemes((prev) =>
      prev.map((meme) => {
        if (!meme.position) return meme;

        const { x, y } = meme.position;

        return { ...meme, position: { x, y: y + 9 } };
      })
    );
  }, 3000);

  useLayoutEffect(() => {
    if (memes.length === 0) return;

    if (!hasRenderedFirst) {
      setHasRenderedFirst(true);
    }

    let memeElements: Element[] = [];

    const containerElement = containerRef.current;

    if (containerElement) {
      memeElements = Array.from<Element>(
        containerElement.querySelectorAll('[data-ref="meme"]')
      );
    }

    const containerWidth = containerElement?.getBoundingClientRect()
      .width as number;

    const newMemes = formatMemes(memes, memeElements, containerWidth);

    setMemes(newMemes);
  }, [memes, hasRenderedFirst]);

  useEffect(() => {
    if (_memes.length === 0 || !hasRenderedFirst) return;

    const containerElement = containerRef.current;

    if (!containerElement) return;

    const timer = setTimeout(() => {
      containerElement.classList.remove("init");
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, [_memes, hasRenderedFirst]);

  return (
    <Container ref={containerRef} className="init">
      {_memes.map(
        ({
          id,
          owner,
          ownerProfileURL,
          imageURL,
          text,
          position = { x: 0, y: 0 },
          createdTime,
          size,
        }) => (
          <Meme
            key={id}
            imageURL={imageURL}
            text={text}
            owner={owner}
            ownerProfileURL={ownerProfileURL}
            position={position}
            size={size}
            memeId={id}
          />
        )
      )}
    </Container>
  );
};

export default MemeList;
