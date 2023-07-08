import styled from "styled-components";

function Button() {
  return <StartButton>시작하기</StartButton>;
}

const StartButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 12px;
  margin-top: 35px;
  font-size: 18px;
  font-weight: 700;
  line-height: 48px;
  color: #ffffff;
  background-color: #ff99f8;
`;

export default Button;
