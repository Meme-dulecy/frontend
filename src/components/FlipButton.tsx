import { styled } from 'styled-components';

type Props = {
  handleFlipButtonClick: () => void;
};

export default function FlipButton({ handleFlipButtonClick }: Props) {
  return (
    <StyledFlipButton onClick={handleFlipButtonClick}>
      밈카드 뒤집기!
    </StyledFlipButton>
  );
}

const StyledFlipButton = styled.button`
  width: 238px;
  height: 45px;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  background-color: #d9d9d9;
  cursor: pointer;
`;
