import { FC, useEffect, useRef } from "react";
import { MessageTypes } from "../../enums";
import { Message } from "../message/component";
import { v4 as uuidv4 } from 'uuid';
import { useSocketContext } from "../../context/socket-context";
import { ReceivedMessage, useMessages } from "../../features/messages";

export const MessageContainer: FC = () => {
  const { messages, receiver } = useMessages();
  const { getUserId } = useSocketContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className='message-container'>
      {
        messages.map((message: ReceivedMessage) => {
          if (message.to === getUserId() && message.from === receiver) {
            return <Message type={MessageTypes.received} userId={message.from} text={message.text} time={message.time} key={uuidv4()} />
          }
          if (message.from === getUserId() && message.to === receiver) {
            return <Message type={MessageTypes.send} userId={message.from} text={message.text} time={message.time} key={uuidv4()} />
          }
        })
      }
      <div ref={messagesEndRef}></div>
    </div>
  );
}