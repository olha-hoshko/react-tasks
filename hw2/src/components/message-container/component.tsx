import { FC } from "react";
import { MessageTypes } from "../../enums";
import { Message } from "../message/component";
import { v4 as uuidv4 } from 'uuid';
import { ReceivedMessage, useChatContext } from "../../context/chat-context";
import { useSocketContext } from "../../context/socket-context";

export const MessageContainer: FC = () => {
  const { messages, receiver } = useChatContext();
  const { getUserId } = useSocketContext();

  return (
    <div className='message-container'>
      {
        messages.map((message: ReceivedMessage) => {
          if (message.to === getUserId() && message.from === receiver) {
            return <Message type={MessageTypes.received} userId={message.from} text={message.text} key={uuidv4()} />
          }
          if (message.from === getUserId() && message.to === receiver) {
            return <Message type={MessageTypes.send} userId={message.from} text={message.text} key={uuidv4()} />
          }
        })
      }
    </div>
  );
}