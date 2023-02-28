import { FC } from "react";
import { ChatContextProvider, useChatContext } from "../../context";
import { SocketProps } from "../../global-types";
import { MainField } from "../main-field";
import { UsersList } from "../users-list";

export const ChatPage: FC<SocketProps> = ({ socket }) => {
  return (
    <ChatContextProvider socket={socket}>
      <div className="App">
        <MainField />
        <UsersList />
      </div>
    </ChatContextProvider>
  );
}