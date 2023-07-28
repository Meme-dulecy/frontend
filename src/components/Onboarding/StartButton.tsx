import styled from "styled-components";

interface StartButtonProps {
  handleStartButtonClick: () => void;
}

function StartButton({ handleStartButtonClick }: StartButtonProps) {
  return <Button onClick={handleStartButtonClick}>시작하기</Button>;
}

const Button = styled.button`
  width: calc(100% - 20px);
  height: 48px;
  border: none;
  border-radius: 12px;
  position: absolute;
  bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  line-height: 48px;
  color: #ffffff;
  background-color: #ff99f8;
  cursor: pointer;
`;

export default StartButton;
