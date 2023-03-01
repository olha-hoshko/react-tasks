import { createContext, FC, useContext, useState } from "react";
import { ChatContextProviderProps, ContextProps, ReceivedMessage } from "./types";

const defaultChatContext: ContextProps = {
  messages: [],
  users: [],
  isChatOpen: false,
  receiver: '',
  sender: '',
  openCloseChat: () => { },
  messageSend: () => { },
  messageReceived: () => { },
  usersReceived: () => { },
}

export const ChatContext = createContext(defaultChatContext);
export const useChatContext = () => useContext(ChatContext);

export const ChatContextProvider: FC<ChatContextProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<ReceivedMessage[]>([]);
  const [users, setUsers] = useState<string[]>([]);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [receiver, setReceiver] = useState<string>('');
  const [sender, setSender] = useState<string>('');

  const openCloseChat = (action: boolean, receiver: string) => {
    setIsChatOpen(action);
    setReceiver(receiver);
  };

  const messageSend = (sender: string) => {
    setSender(sender);
  };

  const messageReceived = (serverMessage: ReceivedMessage) => {
    setMessages([...messages, serverMessage]);
  };

  const usersReceived = (newUsersArray: string[]) => {
    setUsers([...newUsersArray]);
  };

  return (
    <ChatContext.Provider value={{ messages, users, isChatOpen, openCloseChat, receiver, sender, messageSend, messageReceived, usersReceived }}>
      {children}
    </ChatContext.Provider>
  );
}