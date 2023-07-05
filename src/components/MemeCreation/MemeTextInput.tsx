import { ChangeEvent } from "react";
import { styled } from "styled-components";

type Props = {
  text: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextInput({ text, handleChange }: Props) {
  return (
    <Container className="text-input">
      <StyledTextarea
        value={text}
        onChange={handleChange}
        placeholder={`텍스트를${"\n"}입력하세요!!!`}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 281px;
  height: 299px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  outline: none;
  color: white;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
  background-color: #d9d9d9;
  &::placeholder {
    color: white;
  }
`;
