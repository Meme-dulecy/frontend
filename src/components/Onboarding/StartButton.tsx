import styled from "styled-components";

interface StartButtonProps {
  handleStartButtonClick: () => void;
}

function StartButton({ handleStartButtonClick }: StartButtonProps) {
  return (
    <Background>
      <Button onClick={handleStartButtonClick}>시작하기</Button>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 120px;
  padding: 0 20px 20px 20px;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.05) 3.65%,
    rgba(255, 255, 255, 0.45) 10.42%,
    rgba(255, 255, 255, 0.8) 16.67%,
    rgba(255, 255, 255, 0.9) 19.79%,
    #fff 25%,
    #fff 100%
  );
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 48px;
  color: #ffffff;
  background-color: #ff99f8;
  cursor: pointer;
`;

export default StartButton;
