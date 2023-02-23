import { FC } from "react";
import { ParentContainerProps } from "../../global-types";

export const ChatField: FC<ParentContainerProps> = ({ children }) => {
  return (
    <div className='chat-field'>
      {children}
    </div>
  );
}