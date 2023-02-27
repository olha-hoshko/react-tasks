import { FC } from "react";
import { ChatContextProvider, useChatContext } from "../../context";
import { SocketProps } from "../../global-types";
import { ChatField } from "../chat-field";
import { MessageContainer } from "../message-container";
import { SendMessageContainer } from "../send-message-container";
import { UsersList } from "../users-list";

export const MainField: FC = () => {
  const { isChatOpen } = useChatContext();

  return (
    <>
      {
        isChatOpen &&
        <ChatField>
          <MessageContainer />
          <SendMessageContainer />
        </ChatField>
      }
      {
        !isChatOpen &&
        <GreetingField />
      }
    </>
  );
}

export const GreetingField: FC = () => {
  const { socket } = useChatContext();

  return (
    <div className='greeting-field'>
      <p className='greeting'>Hello, user {socket.id}!</p>
      <p className='greeting-small'>Please, choose a person from the list on the right to start chatting.</p>
    </div>
  );
}

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