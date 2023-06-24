import { useRef, useState } from 'react';
import { styled } from 'styled-components';

export default function ImageInput() {
  const [url, setUrl] = useState<string>('');
  const fileRef = useRef<HTMLInputElement | null>(null);

  const changeInputMeme = () => {
    fileRef.current!.files!.length &&
      setUrl(URL.createObjectURL(fileRef.current!.files![0]));
  };

  const clickAddingImage = () => {
    fileRef!.current!.click();
  };
  return (
    <StyledImageInput className="image-input">
      <input
        type="file"
        hidden
        ref={(ref) => (fileRef.current = ref)}
        accept="image/*"
        onChange={changeInputMeme}
      />
      {!url ? (
        <StyledAddingImage onClick={clickAddingImage}>
          <StyledPlusImage src="/assets/images/plus.png" alt="plus" />
        </StyledAddingImage>
      ) : (
        <StyledInputMeme
          src={url}
          alt="input-meme"
          onClick={clickAddingImage}
        />
      )}
    </StyledImageInput>
  );
}

const StyledImageInput = styled.div`
  width: 281px;
  height: 299px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
`;

const StyledAddingImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #d9d9d9;
`;

const StyledPlusImage = styled.img`
  width: 46px;
  height: 46px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const StyledInputMeme = styled.img`
  width: 100%;
  height: auto;
`;
