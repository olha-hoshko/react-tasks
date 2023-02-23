import { createContext, FC, useContext, useEffect, useState } from "react";
import { io } from 'socket.io-client';
import { ChatContextProviderProps, ContextProps, ReceivedMessage } from "./types";

const defaultChatContext: ContextProps = {
  messages: [],
  users: [],
  socket: io(),
}

export const ChatContext = createContext(defaultChatContext);
export const useChatContext = () => useContext(ChatContext);

export const ChatContextProvider: FC<ChatContextProviderProps> = ({ children, socket }) => {
  const [messages, setMessages] = useState<ReceivedMessage[]>([]);
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    socket.on('messageResponse', (serverMessage) => setMessages([...messages, serverMessage]));
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

  return (
    <ChatContext.Provider value={{ messages, users, socket }}>
      {children}
    </ChatContext.Provider>
  );
}