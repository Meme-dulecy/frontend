import { serviceClient } from ".";
import { getCookie } from "../utils/cookie";

export const getUserInfo = async (token: string) => {
  const response = await serviceClient.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.result;
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
