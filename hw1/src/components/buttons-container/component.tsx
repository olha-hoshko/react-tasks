import { FC } from "react";
import { ParentContainerProps } from "../../global-types";

export const ButtonsContainer: FC<ParentContainerProps> = ({ children }) => {
  return (
    <div className='buttons_container'>
      {children}
    </div>
  );
};