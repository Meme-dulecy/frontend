import styled from 'styled-components';

type Props = {
  profileImg: string;
  nickname: string;
};

const NicknameBadge = ({ profileImg, nickname }: Props) => {
  return (
    <Container>
      <Wrapper>
        <UserImage src={profileImg} alt="User Image" />
        <Nickname>{nickname}</Nickname>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 45px;
  background-color: #d9d9d9;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 26px 10px 11px;
  border-radius: 0 0 10px 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const UserImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  border: 1px solid #d9d9d9;
  flex-shrink: 0;
`;

const Nickname = styled.strong`
  color: #fff;
  font-size: 15px;
  line-height: 1.6846666667;
  letter-spacing: -0.33px;
`;

export default NicknameBadge;
