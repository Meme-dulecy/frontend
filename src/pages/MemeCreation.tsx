import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FlipButton from '../components/FlipButton';
import MemeDetailCard from '../components/MemeDetailCard';
import ImageInput from '../components/ImageInput';
import TextInput from '../components/TextInput';
import { getCookie } from '../utils/cookie';

export default function MemeCreation() {
  const [text, setText] = useState('');
  const [image, setImage] = useState<{
    name: string;
    file: null | File;
  }>({
    name: '',
    file: null,
  });
  const [isImage, setIsImage] = useState(true);
  const navigate = useNavigate();
  const token = getCookie('accessToken');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files.length) return;

    const file = e.target.files[0];

    setImage({
      name: file.name,
      file,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFlipButtonClick = () => {
    setIsImage((prev) => !prev);
  };

  const handleMemeCreationButtonClick = async () => {
    if (token === undefined) {
      alert('로그인을 해주세요!');
      navigate('/');
      return;
    }

    try {
      // 1. 사진, 텍스트를 받아와 formData 형태로 만들어준다!
      const formData = new FormData();

      if (image.file !== null) {
        const blob = new Blob([image.file], { type: 'image/*' });
        formData.append('img', blob);
      }

      if (text) {
        formData.append('message', text);
      }

      // 2. 서버에 POST 요청을 보낸다
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URI}/memes`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const {
        result,
        errMsg,
        errCode,
      }: {
        result?: unknown;
        errMsg?: string;
        errCode?: string;
      } = await response.json();

      if (!result && errMsg) {
        alert('(서버) 에러 발생!');

        if (errCode === '01-1') {
          alert('유효하지 않은 이미지 입니다!');
        }

        if (errCode === '02-1') {
          alert('로그인을 다시 시도해주세요!');
        }

        return;
      }

      // 3. 성공적으로 생성되었으면
      alert('밈카드 생성 성공!');
      navigate('/');
    } catch (error) {
      alert('에러가 발생했습니다..');
      console.log(error);
    }
  };

  const hasImageAttached = Boolean(image.name);
  // const hasText = Boolean(text);

  return (
    <Container>
      <MemeDetailCard isImage={isImage}>
        <ImageInput handleImageChange={handleImageChange} />
        <TextInput text={text} handleChange={handleChange} />
      </MemeDetailCard>
      <FlipButton handleFlipButtonClick={handleFlipButtonClick} />
      <ButtonBackground>
        <MemeCreationButton
          // disabled={!(hasText || !!hasImageAttached)}
          disabled={hasImageAttached ? false : true}
          onClick={handleMemeCreationButtonClick}
        >
          밈 생성하기!
        </MemeCreationButton>
      </ButtonBackground>
    </Container>
  );
}

const Container = styled.div`
  perspective: 1200px; // for animation

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  width: 100%;
  height: 100vh;
`;

const ButtonBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 84px;
  background-color: #d9d9d9;
  position: fixed;
  bottom: 0;
`;

const MemeCreationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 308px;
  height: 43px;

  background-color: #ff99f8;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-family: Inter;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.44px;
  cursor: pointer;

  border: none;

  &:disabled {
    cursor: auto;
    background-color: #a3a3a3;
  }
`;
