import { FC, MouseEventHandler, useEffect, useState } from "react";
import { ReceivedMessage, useChatContext } from "../../context/chat-context";
import { UserProps } from "./types";

export const User: FC<UserProps> = ({ userId, userSymbol }) => {
  const { openCloseChat, isChatOpen, receiver, messages } = useChatContext();
  const [newMessageDisplay, setNewMessageDisplay] = useState<string>('hide');
  const [isCurrentChat, setIsCurrentChat] = useState<boolean>(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    setNewMessageDisplay('hide');
    setIsCurrentChat(true);
    openCloseChat(true, userId);
  };

  const currentChat = () => {
    if (isChatOpen && receiver === userId) {
      return 'user user-chosen';
    }
    if (isCurrentChat) {
      setIsCurrentChat(false);
    }
    return 'user';
  };

  useEffect(() => {
    if (messages.length > 0) {
      const lastReceivedMessage: ReceivedMessage = messages[messages.length - 1];
      if(lastReceivedMessage.from === userId) {
        if(!isChatOpen || (isChatOpen && !isCurrentChat)) {
          setNewMessageDisplay('show');
        }
      }
    }
  }, [messages]);

  return (
    <div className={currentChat()} id={`user${userId}`} onClick={handleClick}>
      <div className='user-pic'>{userSymbol}</div>
      <p className='user-name'> User {userId} </p>
      <div className={`new-message-${newMessageDisplay}`}>✉️</div>
    </div>
  );
}