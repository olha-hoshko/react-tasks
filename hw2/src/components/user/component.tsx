import { FC } from "react";
import { UserProps } from "./types";

export const User: FC<UserProps> = ({ userId, userSymbol }) => {
  return (
    <div className='user' id={`user${userId}`}>
      <div className='user-pic'>{userSymbol}</div>
      <p className='user-name'>User {userId}</p>
    </div>
  );
}