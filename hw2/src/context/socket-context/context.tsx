import { createContext, FC, useContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import { ReceivedMessage, useChatContext } from '../chat-context';
import { sendMessageToServerProps, SocketContextProps, SocketContextProviderProps } from './types';

const defaultSocketContext: SocketContextProps = {
  socket: io(),
  getUserId: () => '',
  sendMessageToServer: () => { },
}

export const SocketContext = createContext(defaultSocketContext);
export const useSocketContext = () => useContext(SocketContext);

export const SocketContextProvider: FC<SocketContextProviderProps> = ({ children, socket }) => {
  const { messageReceived, usersReceived } = useChatContext();

  const getUserId = () => {
    return socket.id;
  };

  const sendMessageToServer = ({ message, receiver }: sendMessageToServerProps) => {
    if (message !== '') {
      socket.emit('private-message', {
        text: message,
        userId: getUserId(),
        to: receiver,
      });
    }
  };

  useEffect(() => {
    socket.on('private-message', (serverMessage: ReceivedMessage) => messageReceived(serverMessage));
  }, [socket, messageReceived]);

  const objectToArray = (obj: Object) => {
    return Object.keys(obj).map((key) => key);
  }

  useEffect(() => {
    socket.on('users', (newUsers: Object) => {
      const newUsersArray = objectToArray(newUsers);
      usersReceived(newUsersArray);
    });
  }, [socket, usersReceived]);

  return (
    <SocketContext.Provider value={{ socket, getUserId, sendMessageToServer }}>
      {children}
    </SocketContext.Provider>
  );
}