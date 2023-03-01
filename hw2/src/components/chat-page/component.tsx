import { FC } from "react";
import { ChatContextProvider } from "../../context/chat-context";
import { SocketContextProvider, SocketProps } from "../../context/socket-context";
import { MainField } from "../main-field";
import { UsersList } from "../users-list";

export const ChatPage: FC<SocketProps> = ({ socket }) => {
  return (
    <ChatContextProvider>
      <SocketContextProvider socket={socket}>
        <div className="App">
          <MainField />
          <UsersList />
        </div>
      </SocketContextProvider>
    </ChatContextProvider>
  );
}