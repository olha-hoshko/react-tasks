import { FC } from "react";
import { MessageTypes } from "../../enums";
import { MessageProps } from "./types";

type MessageDataProps = {
  text: string,
  time: string,
  type: string,
}

const MessageData: FC<MessageDataProps> = ({ text, time, type }) => {
  return (
    <div className='message-data'>
      <p className={`message-text-${type}`}>{text}</p>
      <p className={`timestamp-${type}`}>{time}</p>
    </div>
  );
}

type MessageUserPicProps = {
  userIdShort: string,
}

const MessageUserPic: FC<MessageUserPicProps> = ({ userIdShort }) => {
  return (
    <div className='message-user-pic'>{userIdShort}</div>
  );
}

export const Message: FC<MessageProps> = ({ type, userId, text, time }) => {
  const switchMessageType = () => {
    const userIdShort = userId.slice(0, 1);

    switch (type) {
      case MessageTypes.received:
        return (
          <>
            <MessageUserPic userIdShort={userIdShort}/>
            <MessageData text={text} time={time} type={type} />
          </>
        );
      case MessageTypes.send:
        return (
          <>
            <MessageData text={text} time={time} type={type} />
            <MessageUserPic userIdShort={userIdShort}/>
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