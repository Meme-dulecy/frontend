import { useState } from "react";
import styled, { css } from "styled-components";
import MemeDetailCard from "../components/MemeDetailCard";

const MemeDetail = () => {
  const [isImage, setIsImage] = useState<boolean>(true);
  const imgUrl = "https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png";
  const message = "퇴근 폼 미쳤다 어쩌구... 나는 그냥 ㅣㅁ쳤다...퇴근 폼 미쳤";   
  
  const handleMemeDetailCardClick = () => {
    if(imgUrl === null || message === null) { 
      return;
    }

    setIsImage((prev) => !prev);
  };

  return (
    <Container>
      <StyledCard>
        <MemeDetailCard
          isImage={isImage}
          handleMemeDetailCardClick={handleMemeDetailCardClick}
          >
            <StyledCardFront>
              {
                imgUrl ? 
                <StyledCardImage
                  className="image-input"
                  src={
                    "https://images.unsplash.com/photo-1687154156757-25b60bb3892d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  }
                  alt="input-meme"
                  hasImgUrl={!!imgUrl}
                  hasMessage={!!message}
                />
              :
                <StyledCardText hasImgUrl={!!imgUrl} hasMessage={!!message}>
                  {message}
                </StyledCardText>
              }
            </StyledCardFront>
            {
              message && 
                <StyledCardText hasImgUrl={!!imgUrl} className="text-input" hasMessage={!!message}>
                  {message}
                </StyledCardText>
            }
        </MemeDetailCard>
      </StyledCard>
    </Container>
  );
};

interface StyledProps {
  hasImgUrl: boolean;
  hasMessage: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 552px;
  background: #FFF;
  perspective: 1200px;
`;

const StyledCardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardImage = styled.img<StyledProps>`
  width: 281px;
  height: 299px;
  border: 1px solid #D9D9D9;
  border-radius: 3px;
  object-fit: cover;
  ${({ hasImgUrl, hasMessage }) =>
    hasImgUrl && hasMessage &&
    css`
      cursor: pointer;
    `}
`;

const StyledCardText = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 1px solid #D9D9D9;
  background: #D9D9D9;
  color: #FFF;
  font-size: 20px;
  font-weight: 700;
  word-break: break-all;
  ${({ hasImgUrl, hasMessage }) =>
    hasImgUrl && hasMessage &&
    css`
      cursor: pointer;
    `}
`;

export default MemeDetail;
