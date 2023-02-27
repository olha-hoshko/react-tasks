import { Socket } from 'socket.io-client';
import { ParentContainerProps, SocketProps } from '../global-types';

export type ReceivedMessage = {
  from: string,
  text: string,
  to: string,
}

export type ContextProps = {
  messages: ReceivedMessage[],
  users: string[],
  socket: Socket,
  isChatOpen: boolean,
  openCloseChat: (action: boolean, receiver: string) => void,
  receiver: string,
  sender: string,
  messageSend: (sender: string) => void,
}

export type ChatContextProviderProps = ParentContainerProps & SocketProps;