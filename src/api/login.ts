import { setCookie } from "../utils/cookie";
import { serviceClient } from ".";

export const getToken = async (code: string) => {
  const { data } = await serviceClient.post(
    `/users/log-in/kakao?code=${code}`,
    {}
  );

  const token = data.result.token;
  if (token) {
    setCookie("accessToken", token);
  }

  return token;
};
