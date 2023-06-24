import styled from "styled-components";
import { useState } from "react";
import MemeDetailCard from "../components/MemeDetailCard";

const MemeDetail = () => {
  const [isImage, setIsImage] = useState<boolean>(false);

  const handleMemeDetailCardClick = () => {
    setIsImage((prev) => !prev);
  };

  return (
    <MemeDetailCard
      isImage={isImage}
      handleMemeDetailCardClick={handleMemeDetailCardClick}
    >
      <div>
        <MemeImage
          className="image-input"
          src={
            "https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png"
          }
          alt="input-meme"
        />
      </div>
      <MemeText className="text-input">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, nisi?
      </MemeText>
    </MemeDetailCard>
  );
};

const MemeImage = styled.img`
  width: 100%;
  height: auto;
`;

const MemeText = styled.div`
  width: 281px;
  height: 299px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default MemeDetail;
