import * as S from "./styles";

export const KakaoLogin = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI;

  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <S.LoginLink href={url}>
      <S.LoginButton>카카오톡으로 로그인하기</S.LoginButton>
    </S.LoginLink>
  );
};
