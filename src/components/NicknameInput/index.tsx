import { ChangeEvent, useEffect, useState } from "react";

import * as S from "./styles";

import { createRandomNickname } from "../../utils/randomNickname";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserInfoState } from "../../pages/Main/UserCard";

import { MdCancel, MdEdit } from "react-icons/md";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { editUserNickname, getUserInfo } from "../../api/user";
import { getCookie } from "../../utils/cookie";

const NickNameInput = () => {
  const userInfo = useRecoilValue(UserInfoState);
  const setUserInfo = useSetRecoilState(UserInfoState);
  const [initialNickname, setInitialNickname] = useState<string>(
    userInfo.nickname
  );

  useEffect(() => {
    const token = getCookie("accessToken");
    if (userInfo.nickname === "" && token) {
      (async () => {
        const response = await getUserInfo(token);
        setUserInfo(response);
      })();
    }
  }, []);

  const resetNickname = () => {
    setUserInfo({ ...userInfo, nickname: initialNickname });
  };

  const userInputNickName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, nickname: e.target.value });
  };

  const userRandomNickName = () => {
    setUserInfo({ ...userInfo, nickname: createRandomNickname() });
  };

  const saveUserNickname = () => {
    if (initialNickname !== userInfo.nickname)
      editUserNickname(userInfo.nickname);
  };

  return (
    <S.Container>
      <S.NicknameInputContainer>
        <p>@ </p>
        <S.Input value={userInfo.nickname} onChange={userInputNickName} />
        {userInfo.nickname.length > 0 ? (
          <MdEdit onClick={saveUserNickname} />
        ) : (
          <MdCancel onClick={resetNickname} />
        )}
      </S.NicknameInputContainer>
      <S.NicknameGenerator onClick={userRandomNickName}>
        <GiPerspectiveDiceSixFacesRandom />
      </S.NicknameGenerator>
    </S.Container>
  );
};

export default NickNameInput;
