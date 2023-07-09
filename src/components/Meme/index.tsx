import styled from "styled-components";
import { Link } from "react-router-dom";

import { MemeDesc, MemeWrapper } from "./styles";
import ProfileImage from "../ProfileImage";
import { typo } from "../../utils/style";

interface Props {
  meme: {
    id: string;
    imageURL?: string;
    text?: string;
    owner: string;
    ownerProfileURL?: string;
    // position: Position;
    size: Meme["size"];
  };
}

const Meme = ({ meme }: Props) => {
  const { id, size, imageURL, ownerProfileURL, owner } = meme;

  return (
    <Link to={"/detail"} state={{ memeId: id }}>
      <Container>
        <MemeWrapper>
          <img src={imageURL} />
        </MemeWrapper>
        <MemeDesc>
          <ProfileImage imageURL={ownerProfileURL} />
          <Text>{owner}</Text>
        </MemeDesc>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  width: 150px;
  background-color: yellow;
  border: 2px solid black;
  border-radius: 4px;

  margin: 0;
  margin-bottom: 3vh;

  font-size: 10px;
`;

const Text = styled.div`
  ${typo("detail")};
`;

export default Meme;
