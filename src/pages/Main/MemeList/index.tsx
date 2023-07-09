import styled from "styled-components";

import Meme from "../../../components/Meme";
import Loading from "../../../components/Loading";
import useMemes from "../../../hooks/queries/useMemes";
import useBottomRef from "../../../hooks/useBottomRef";

const MemeList = () => {
  const { memes, isLoading, isFetching } = useMemes();
  const { bottomRef } = useBottomRef();

  if (isLoading || isFetching) {
    return (
      <>
        <Loading message="밈 가져오는 중.." />
        {bottomRef}
      </>
    );
  }

  return (
    <Container>
      {memes.map((meme) => {
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
