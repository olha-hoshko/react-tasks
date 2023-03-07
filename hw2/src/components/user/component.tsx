import { FC, MouseEventHandler, useEffect, useState } from "react";
import { MessageDisplay } from "../../enums";
import { useChat } from "../../features/chat";
import { ReceivedMessage, useMessages } from "../../features/messages";
import { UserProps } from "./types";

export const User: FC<UserProps> = ({ userId, userSymbol }) => {
  const { openCloseChat, isChatOpen } = useChat();
  const { messages, receiver, setReceiver } = useMessages();
  const [newMessageDisplay, setNewMessageDisplay] = useState<MessageDisplay>(MessageDisplay.hide);
  const [isCurrentChat, setIsCurrentChat] = useState<boolean>(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    setNewMessageDisplay(MessageDisplay.hide);
    setIsCurrentChat(true);
    openCloseChat(true);
    setReceiver(userId);
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
      if (lastReceivedMessage.from === userId) {
        if (!isChatOpen || (isChatOpen && !isCurrentChat)) {
          setNewMessageDisplay(MessageDisplay.show);
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