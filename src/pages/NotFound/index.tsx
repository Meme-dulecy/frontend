import * as S from "./styles";

export const NotFound = () => {
  return (
    <S.Container>
      <S.CodeNumber>"404"</S.CodeNumber>
      <S.NoticeText>
        <span className="green-text">해당 페이지</span>는<br />
        <span className="blue-text">제공</span>되지
        <span className="pink-text">않고</span>
        <br /> 있습니다. <span className="yellow-text">T_T</span>
      </S.NoticeText>
    </S.Container>
  );
};
