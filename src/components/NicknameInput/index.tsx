import { ChangeEvent, useEffect, useState } from "react";

import * as S from "./styles";

import { createRandomNickname } from "../../utils/randomNickname";
import { MdCancel, MdEdit } from "react-icons/md";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { editUserNickname } from "../../api/user";
import useUserInfo from "../../hooks/queries/useUserInfo";

export interface UserInfoType {
  creator: string;
  updater: string;
  createdTs: number;
  updatedTs: number;
  profileImg: string;
  lastLoginTs: number;
  userId: string;
  type: string;
  nickname: string;
}

const NickNameInput = () => {
  const { userInfo, setUserInfo } = useUserInfo();
  const [userNickname, setUserNickname] = useState("");

  useEffect(() => {
    resetNickname();
  }, []);

  const resetNickname = () => {
    setUserNickname(userInfo.nickname);
  };

  const userInputNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNickname(e.target.value);
  };

  const userRandomNickname = () => {
    const newNickName = createRandomNickname();
    setUserNickname(newNickName);
  };

  const saveUserNickname = () => {
    if (userNickname !== userInfo.nickname) {
      setUserInfo({ ...userInfo, nickname: userNickname });
      editUserNickname(userNickname);
    }
  };

  return (
    <S.Container>
      <S.NicknameInputContainer>
        <p>@ </p>
        <S.Input value={userNickname} onChange={userInputNickname} />
        {userNickname.length > 0 ? (
          <MdEdit onClick={saveUserNickname} />
        ) : (
          <MdCancel onClick={resetNickname} />
        )}
      </S.NicknameInputContainer>
      <S.NicknameGenerator onClick={userRandomNickname}>
        <GiPerspectiveDiceSixFacesRandom />
      </S.NicknameGenerator>
    </S.Container>
  );
};

export default NickNameInput;
