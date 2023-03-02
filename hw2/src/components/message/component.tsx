import { FC } from "react";
import { MessageTypes } from "../../enums";
import { MessageProps } from "./types";

export const Message: FC<MessageProps> = ({ type, userId, text, time }) => {
  const switchMessageType = () => {
    switch (type) {
      case MessageTypes.received:
        return (
          <>
            <div className='message-user-pic'>{userId.slice(0, 1)}</div>
            <div className='message-data'>
              <p className='message-text-received'>{text}</p>
              <p className='timestamp-received'>{time}</p>
            </div>
          </>
        );
      case MessageTypes.send:
        return (
          <>
            <div className='message-data'>
              <p className='message-text-send'>{text}</p>
              <p className='timestamp-send'>{time}</p>
            </div>
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