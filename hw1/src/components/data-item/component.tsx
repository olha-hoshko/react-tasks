import { FC } from "react";
import { DataItemProps } from "./types";

export const DataItem: FC<DataItemProps> = ({ children, index }) => {
  return (
    <div className='data' data-key={index}>
      {children}
    </div>
  );
};