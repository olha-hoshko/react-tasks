import { FC, MouseEventHandler } from "react";
import { useChatContext } from "../../context/chat-context";
import { UserProps } from "./types";

export const User: FC<UserProps> = ({ userId, userSymbol }) => {
  const { openCloseChat, isChatOpen, receiver } = useChatContext();

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    openCloseChat(true, userId);
  }

  const currentChat = () => {
    if (isChatOpen && receiver === userId) {
      return 'user user-chosen';
    }
    return 'user';
  }

  return (
    <div className={currentChat()} id={`user${userId}`} onClick={handleClick}>
      <div className='user-pic'>{userSymbol}</div>
      <p className='user-name'> User {userId} </p>
    </div>
  );
}