import * as S from "./styles";
import { atom, useRecoilState } from "recoil";
import { Modal } from "../../../components/Modal";
import { createPortal } from "react-dom";
import { KakaoLogin } from "../../../components/Login";
import { TbEdit } from "react-icons/tb";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

import { useNavigate } from "react-router-dom";

import { createRandomNickname } from "../../../utils/randomNickname";
import { useCallback, useEffect } from "react";
import { getCookie } from "../../../utils/cookie";
import useUserInfo from "../../../hooks/queries/useUserInfo";

export const AuthState = atom({
  key: "AuthState",
  default: false,
});

export const ModalState = atom({
  key: "ModalState",
  default: false,
});

const UserCard = () => {
  const token = getCookie("accessToken");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useRecoilState(ModalState);
  const { userInfo, setUserInfo, isLoading, isFetching } = useUserInfo();

  useEffect(() => {
    updateRandomUserNickName();
  }, []);

  const handleModalState = () => {
    if (token) {
      navigate("/user");
    } else {
      setIsModalOpen((prev) => !prev);
    }
  };

  const updateRandomUserNickName = useCallback(() => {
    setUserInfo({ ...userInfo, nickname: createRandomNickname() });
  }, [setUserInfo, userInfo]);

  if (isLoading && isFetching) return <div>Loading...</div>;

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
