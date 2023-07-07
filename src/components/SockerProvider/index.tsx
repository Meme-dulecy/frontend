import React, { useCallback, useEffect, useRef } from "react";
import { useInterval } from "react-use";
import { SOCKET_MESSAGE } from "../../constants/socket";
import { io } from "socket.io-client";
import { getCookie } from "../../utils/cookie";

export const socketIO = io(process.env.REACT_APP_SOCKET_URI ?? "", {
  transports: ["websocket"],
});

const SocketProvider = ({ children }: React.PropsWithChildren) => {
  const socket = useRef(socketIO);

  const updateGPSLocation = useCallback(async () => {
    const {
      coords: { latitude, longitude },
    } = await getGPSLocation();

    socketIO.emit(SOCKET_MESSAGE.UPDATE_GPS, {
      lat: latitude,
      long: longitude,
      token: getCookie("accessToken"),
    });
  }, []);

  useEffect(() => {
    socket.current.on(SOCKET_MESSAGE.CONNECT, () => {
      updateGPSLocation();
    });
  }, [updateGPSLocation]);

  useInterval(() => {
    if (!socket.current.connected) return;
    updateGPSLocation();
  }, 1000);

  return <>{children}</>;
};

export default SocketProvider;

const getGPSLocation = (): Promise<GeolocationPosition> =>
  new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(
      (position) => res(position),
      (error) => rej(error)
    );
  });
