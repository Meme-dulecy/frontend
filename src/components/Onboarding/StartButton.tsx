import styled from "styled-components";

interface StartButtonProps {
  handleStartButtonClick: () => void;
}

function StartButton({ handleStartButtonClick }: StartButtonProps) {
  return <Button onClick={handleStartButtonClick}>시작하기</Button>;
}

const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 12px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 48px;
  color: #ffffff;
  background-color: #ff99f8;
`;

export default StartButton;
