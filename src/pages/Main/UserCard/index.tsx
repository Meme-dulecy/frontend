import { useCallback, useEffect } from "react";
import * as S from "./styles";
import { getToken } from "../../../api/login";

import { createRandomNickname } from "../../../utils/randomNickname";
import { atom, useRecoilState } from "recoil";
import { Modal } from "../../../components/Modal";
import { createPortal } from "react-dom";
import { KakaoLogin } from "../../../components/Login";
import { TbEdit } from "react-icons/tb";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

import { getCookie } from "../../../utils/cookie";
import { getUserInfo } from "../../../api/user";
import { useNavigate } from "react-router-dom";

export const AuthState = atom({
  key: "AuthState",
  default: false,
});

export const ModalState = atom({
  key: "ModalState",
  default: false,
});

export const UserInfoState = atom({
  key: "UserInfoState",
  default: {
    creator: "",
    updater: "",
    createdTs: 0,
    updatedTs: 0,
    profileImg: "",
    lastLoginTs: 0,
    userId: "",
    type: "",
    nickname: "",
  },
});

const UserCard = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useRecoilState(AuthState);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(ModalState);
  let authCode = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    updateRandomUserNickName();
  }, []);

  useEffect(() => {
    const token = getCookie("accessToken");

    if (!token) {
      if (authCode) {
        (async () => {
          const newToken = await getToken(authCode!);
          const response = await getUserInfo(newToken);

          setUserInfo(response);
          setIsAuth(true);
        })();
      }
    } else {
      (async () => {
        const response = await getUserInfo(token);

        setUserInfo(response);
        setIsAuth(true);
      })();
    }
  }, [authCode, setIsAuth, setUserInfo]);

  const updateRandomUserNickName = useCallback(() => {
    setUserInfo({ ...userInfo, nickname: createRandomNickname() });
  }, [setUserInfo]);

  const handleModalState = () => {
    if (isAuth) {
      navigate("/user");
    } else {
      setIsModalOpen((prev) => !prev);
    }
  };

  return (
    <>
      <S.Container>
        <p>{`@ ${userInfo.nickname}`}</p>
        <TbEdit onClick={handleModalState} />
      </S.Container>
      {isModalOpen &&
        createPortal(
          <Modal>
            <S.UserNickName>
              <p>@ {userInfo.nickname}</p>
              <S.NicknameGenerator onClick={updateRandomUserNickName}>
                <GiPerspectiveDiceSixFacesRandom />
              </S.NicknameGenerator>
            </S.UserNickName>
            <KakaoLogin />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default UserCard;
