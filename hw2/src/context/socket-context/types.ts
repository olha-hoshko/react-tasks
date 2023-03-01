import { Socket } from "socket.io-client";
import { ParentContainerProps } from "../../global-types";

export type SocketProps = {
  socket: Socket,
}

export type sendMessageToServerProps = {
  message: string,
  receiver: string,
}

export type SocketContextProps = SocketProps & {
  getUserId: () => string,
  sendMessageToServer: ({message, receiver}: sendMessageToServerProps) => void,
};

export type SocketContextProviderProps = ParentContainerProps & SocketProps;