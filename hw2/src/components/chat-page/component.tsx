import { FC } from "react";
import { SocketContextProvider, SocketProps } from "../../context/socket-context";
import { MainField } from "../main-field";
import { UsersList } from "../users-list";

import { store } from '../../store';
import { Provider } from 'react-redux';

export const ChatPage: FC<SocketProps> = ({ socket }) => {
  return (
    <Provider store={store}>
      <SocketContextProvider socket={socket}>
        <div className="App">
          <MainField />
          <UsersList />
        </div>
      </SocketContextProvider>
    </Provider>
  );
}