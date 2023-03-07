import { FC } from "react";
import { useChat } from "../../features/chat";
import { ChatField } from "../chat-field";
import { GreetingField } from "../greeting-field";
import { MessageContainer } from "../message-container";
import { SendMessageContainer } from "../send-message-container";

export const MainField: FC = () => {
  const { isChatOpen } = useChat();

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