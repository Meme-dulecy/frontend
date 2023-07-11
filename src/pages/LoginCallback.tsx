import axios from "axios";
import { useEffect } from "react";
import { setCookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";

const LoginCallBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const USER_CODE = params.get("code");
    const SERVER_URI = `${process.env.REACT_APP_SERVER_URI}`;

    const getTokenURL = `${SERVER_URI}/users/log-in/kakao?code=${USER_CODE}`;

    axios
      .post(
        getTokenURL,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res: any) => {
        if (res.data.result.token) {
          setCookie("accessToken", res.data.result.token);
        }
        navigate("/");
      });
  }, [navigate]);

  return <></>;
};

export default LoginCallBack;
