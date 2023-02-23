import { FC } from "react";
import { useChatContext } from "../../context/context";
import { MessageTypes } from "../../enums";
import { Message } from "../message/component";

export const MessageContainer: FC = () => {
  const { socket, messages } = useChatContext();

  return (
    <div className='message-container'>
      {
        messages.map((message: any) => {
          if (message.userId === socket.id) {
            return <Message type={MessageTypes.send} userId={message.userId} text={message.text} key={message.userId} />
          }
          return <Message type={MessageTypes.received} userId={message.userId} text={message.text} key={message.userId} />
        })
      }
    </div>
  );
}