import { FC } from "react";
import { MessageTypes } from "../../enums";
import { MessageProps } from "./types";

export const Message: FC<MessageProps> = ({ type, userId, text }) => {
  const switchMessageType = () => {
    switch (type) {
      case MessageTypes.received:
        return (
          <>
            <div className='message-user-pic'>{userId.slice(0, 1)}</div>
            <p className='message-text'>{text}</p>
          </>
        );
      case MessageTypes.send:
        return (
          <>
            <p className='message-text'>{text}</p>
            <div className='message-user-pic'>{userId.slice(0, 1)}</div>
          </>
        );
    }
  }

  return (
    <div className={`message-${type}`}>
      {switchMessageType()}
    </div>
  );
}