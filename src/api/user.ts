import { serviceClient } from ".";
import { getCookie } from "../utils/cookie";

export const getUserInfo = async () => {
  const token = getCookie("accessToken");
  return await fetch(`${process.env.REACT_APP_SERVER_URI}/users`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.json();
  });
};

export const editUserNickname = async (newNickName: string) => {
  const token = getCookie("accessToken");
  await serviceClient.put(
    "/users",
    {
      nickname: newNickName,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
