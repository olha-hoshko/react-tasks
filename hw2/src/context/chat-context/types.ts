import { ParentContainerProps } from '../../global-types';

export type ReceivedMessage = {
  from: string,
  text: string,
  to: string,
}

export type ContextProps = {
  messages: ReceivedMessage[],
  users: string[],
  isChatOpen: boolean,
  openCloseChat: (action: boolean, receiver: string) => void,
  receiver: string,
  sender: string,
  messageSend: (sender: string) => void,
  messageReceived: (serverMessage: ReceivedMessage) => void,
  usersReceived: (newUsersArray: string[]) => void,
}

export type ChatContextProviderProps = ParentContainerProps;