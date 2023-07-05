import { useRef, useState } from "react";
import { styled } from "styled-components";

interface Props {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageInput({ handleImageChange }: Props) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const fileRef = useRef<HTMLInputElement | null>(null);

  const changeInputMeme = (e: React.ChangeEvent<HTMLInputElement>) => {
    fileRef.current!.files!.length &&
      setImageUrl(URL.createObjectURL(fileRef.current!.files![0]));
    handleImageChange(e);
  };

  const handleFileInputClick = () => {
    fileRef!.current!.click();
  };

  return (
    <Container className="image-input">
      <input
        type="file"
        hidden
        ref={(ref) => (fileRef.current = ref)}
        accept="image/*"
        onChange={changeInputMeme}
      />

      {imageUrl ? (
        <AddedImage
          src={imageUrl}
          alt="input-meme"
          onClick={handleFileInputClick}
        />
      ) : (
        <AddImage onClick={handleFileInputClick}>
          <PlusButton src="/assets/images/plus.png" alt="plus" />
        </AddImage>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 281px;
  height: 299px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
`;

const AddImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #d9d9d9;
`;

const PlusButton = styled.img`
  width: 46px;
  height: 46px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const AddedImage = styled.img`
  width: 100%;
  height: auto;
`;
