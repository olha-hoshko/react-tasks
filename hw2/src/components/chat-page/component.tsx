import { FC } from "react";
import { ChatContextProvider } from "../../context";
import { SocketProps } from "../../global-types";
import { ChatField } from "../chat-field";
import { MessageContainer } from "../message-container";
import { SendMessageContainer } from "../send-message-container";
import { UsersList } from "../users-list";

export const ChatPage: FC<SocketProps> = ({ socket }) => {
  return (
    <ChatContextProvider socket={socket}>
      <div className="App">
        <ChatField>
          <MessageContainer />
          <SendMessageContainer />
        </ChatField>
        <UsersList />
      </div>
    </ChatContextProvider>
  );
}