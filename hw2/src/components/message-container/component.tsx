import { FC } from "react";
import { ReceivedMessage } from "../../context";
import { useChatContext } from "../../context/context";
import { MessageTypes } from "../../enums";
import { Message } from "../message/component";
import {v4 as uuidv4} from 'uuid';

export const MessageContainer: FC = () => {
  const { socket, messages, receiver } = useChatContext();

  return (
    <div className='message-container'>
      {
        messages.map((message: ReceivedMessage) => {
          if(message.to === socket.id && message.from === receiver) {
            return <Message type={MessageTypes.received} userId={message.from} text={message.text} key={uuidv4()} />
          }
          if(message.from === socket.id && message.to === receiver) {
            return <Message type={MessageTypes.send} userId={message.from} text={message.text} key={uuidv4()} />
          }
        })
      }
    </div>
  );
}