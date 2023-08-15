import React, { useEffect, useRef, useState } from "react";
import Container from "./styles";
import Meme from "../../../components/Meme";
import { getTimeDiffBetweenNowAnd, getXCoord } from "./meta";
import { useInterval } from "react-use";

interface MemeListProps {
  memesTimeLine: Meme[][];
}

const MemeList: React.FC<MemeListProps> = ({ memesTimeLine }) => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useInterval(() => {
    if (!memes.length) return;

    setMemes(
      memes.map((meme) => ({
        ...meme,
        position: {
          x: meme.position?.x ?? 0,
          y:
            getTimeDiffBetweenNowAnd(meme.createdTime) *
            getHeightOffsetPerSec(),
        },
      }))
    );
  }, 1000);

  useEffect(() => {
    if (!memesTimeLine.length) return;

    setMemes(
      memesTimeLine.flat().map((meme) => ({
        ...meme,
        position: {
          x:
            meme.position?.x ??
            getXCoord(
              meme.createdTime % getContainerWidth(),
              getContainerWidth(),
              meme.size,
              memes
            ),
          y:
            getTimeDiffBetweenNowAnd(meme.createdTime) *
            getHeightOffsetPerSec(),
        },
      }))
    );
  }, [memesTimeLine]);

  const getHeightOffsetPerSec = (): number => {
    const containerElement = containerRef.current;

    if (!containerElement) return 0;

    return containerRef.current.clientHeight / (60 * 30);
  };

  const getContainerWidth = (): number => {
    const containerElement = containerRef.current;

    if (!containerElement) return 0;

    return containerRef.current.clientWidth;
  };

  return (
    <Container ref={containerRef} className="init">
      {memes?.map(
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
