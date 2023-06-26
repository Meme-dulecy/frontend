import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NicknameInputContainer = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 17px;

  padding: 5px 13px;
  border: 1px solid lightgray;
  border-radius: 999px;

  & p {
    margin-left: 10px;
  }

  & svg {
    font-size: 24px;
  }
`;

export const Input = styled.input`
  margin-right: 15px;
  border: 0;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export const NicknameGenerator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid #cccccc;
  border-radius: 999px;

  & svg {
    font-size: 24px;
  }
`;
