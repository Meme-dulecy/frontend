import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #faffe4;
`;

export const CodeNumber = styled.h1`
  margin: 0;
  font-size: 68px;
  line-height: 102px;
  color: #ff99f8;
`;

export const NoticeText = styled.p`
  font-size: 35px;
  font-weight: 700;
  color: #d9d9d9;

  & .green-text {
    color: #86fa16;
  }
  & .pink-text {
    color: #ff99f8;
  }
  & .yellow-text {
    color: #ffee00;
  }
  & .blue-text {
    color: #6ffff6;
  }
`;
