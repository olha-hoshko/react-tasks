import { createContext, FC, useContext, useEffect, useState } from "react";
import { io } from 'socket.io-client';
import { ChatContextProviderProps, ContextProps, ReceivedMessage } from "./types";

const defaultChatContext: ContextProps = {
  messages: [],
  users: [],
  socket: io(),
  isChatOpen: false,
  receiver: '',
  sender: '',
  openCloseChat: () => { },
  messageSend: () => { },
}

export const ChatContext = createContext(defaultChatContext);
export const useChatContext = () => useContext(ChatContext);

export const ChatContextProvider: FC<ChatContextProviderProps> = ({ children, socket }) => {
  const [messages, setMessages] = useState<ReceivedMessage[]>([]);
  const [users, setUsers] = useState<string[]>([]);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [receiver, setReceiver] = useState<string>('');
  const [sender, setSender] = useState<string>('');

  useEffect(() => {
    socket.on('private-message', (serverMessage) => setMessages([...messages, serverMessage]));
  }, [socket, messages]);

  const objectToArray = (obj: Object) => {
    return Object.keys(obj).map((key) => key);
  }

  useEffect(() => {
    socket.on('users', (newUsers) => {
      const newUsersArray = objectToArray(newUsers);
      setUsers([...newUsersArray]);
    });
  }, [socket, users]);

  const openCloseChat = (action: boolean, receiver: string) => {
    setIsChatOpen(action);
    setReceiver(receiver);
  };

  const messageSend = (sender: string) => {
    setSender(sender);
  }

  return (
    <ChatContext.Provider value={{ messages, users, socket, isChatOpen, openCloseChat, receiver, sender, messageSend }}>
      {children}
    </ChatContext.Provider>
  );
}