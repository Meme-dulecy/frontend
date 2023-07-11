import { atom, useRecoilState } from "recoil";
import { getCookie } from "../../utils/cookie";
import { useQuery } from "@tanstack/react-query";
import QUERY_KEY from "../../constants/query";
import { getUserInfo } from "../../api/user";

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

const useUserInfo = () => {
  const token = getCookie("accessToken");
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);

  const { isLoading, isFetching } = useQuery(QUERY_KEY.USER, getUserInfo, {
    enabled: !!token,

    onSuccess: (data) => {
      setUserInfo(data.result);
    },
  });

  return {
    isLoading,
    isFetching,
    userInfo,
    setUserInfo,
  };
};

export default useUserInfo;
