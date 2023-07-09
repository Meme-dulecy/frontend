import React from "react";
import styled from "styled-components";

import Meme from "../../../components/Meme";
import useBottomRef from "../../../hooks/useBottomRef";

interface MemeListProps {
  memes: Meme[];
}

const MemeList: React.FC<MemeListProps> = ({ memes }) => {
  const { bottomRef, isIntersecting } = useBottomRef();

  if (isIntersecting) {
    // still show loading spinner
  }

  return (
    <Container>
      {memes.map((meme, index, memes) => {
        return (
          <div key={meme.id}>
            <Meme meme={meme} />
          </div>
        );
      })}
      {bottomRef}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100svh;
  overflow-y: auto;

  background-color: pink;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MemeList;
