import { createContext, FC, useContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import { ReceivedMessage, useMessages } from '../../features/messages';
import { useUsers } from '../../features/users';
import { sendMessageToServerProps, SocketContextProps, SocketContextProviderProps } from './types';

const defaultSocketContext: SocketContextProps = {
  socket: io(),
  getUserId: () => '',
  sendMessageToServer: () => { },
}

export const SocketContext = createContext(defaultSocketContext);
export const useSocketContext = () => useContext(SocketContext);

export const SocketContextProvider: FC<SocketContextProviderProps> = ({ children, socket }) => {
  const { messageReceived } = useMessages();
  const { usersReceived } = useUsers();

  const getUserId = () => {
    return socket.id;
  };

  const sendMessageToServer = ({ message, receiver }: sendMessageToServerProps) => {
    if (!message) return;
    socket.emit('private-message', {
      text: message,
      userId: getUserId(),
      to: receiver,
    });
  };

  useEffect(() => {
    socket.on('private-message-received', (serverMessage: ReceivedMessage) => messageReceived(serverMessage));
    return function cleanup() {
      socket.off('private-message-received');
    };
  }, []);

  const objectToArray = (obj: Object) => {
    return Object.keys(obj).map((key) => key);
  }

  useEffect(() => {
    socket.on('users', (newUsers: Object) => {
      const newUsersArray = objectToArray(newUsers);
      usersReceived(newUsersArray);
    });
  }, []);

  return (
    <SocketContext.Provider value={{ socket, getUserId, sendMessageToServer }}>
      {children}
    </SocketContext.Provider>
  );
}