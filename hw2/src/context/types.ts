import { Socket } from 'socket.io-client';
import { ParentContainerProps, SocketProps } from '../global-types';

export type ReceivedMessage = {
  userId: string,
  text: string,
}

export type ContextProps = {
  messages: ReceivedMessage[],
  users: string[],
  socket: Socket,
}

export type ChatContextProviderProps = ParentContainerProps & SocketProps;