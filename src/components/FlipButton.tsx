import { styled } from 'styled-components';

export default function FlipButton() {
  const handleClick = () => {
    console.log('click!');
  };

  return (
    <StyledFlipButton onClick={handleClick}>밈카드 뒤집기!</StyledFlipButton>
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
