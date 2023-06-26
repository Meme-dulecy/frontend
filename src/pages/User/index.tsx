import { AiOutlineArrowLeft } from "react-icons/ai";
import NickNameInput from "../../components/NicknameInput";

import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../utils/cookie";
import { useSetRecoilState } from "recoil";
import { AuthState } from "../Main/UserCard";

const UserPage = () => {
  const navigate = useNavigate();
  const setIsAuth = useSetRecoilState(AuthState);

  const handleLogout = () => {
    removeCookie("accessToken");
    setIsAuth(false);
    navigate("/");
  };

  return (
    <S.Container>
      <AiOutlineArrowLeft
        onClick={() => {
          navigate("/");
        }}
      />
      <S.UserInfoControl>
        <NickNameInput />
        <S.Logout onClick={handleLogout}>로그아웃</S.Logout>
      </S.UserInfoControl>
    </S.Container>
  );
};

export default UserPage;
