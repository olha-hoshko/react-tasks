import { FC, MouseEventHandler } from "react";
import { useDataContext } from "../../context/data-context";
import { buttonNames } from "./config";
import { DefaultButtonProps } from "./types";

export const DefaultButton: FC<DefaultButtonProps> = ({ requestType }) => {
  const { setRequestType } = useDataContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setRequestType(requestType)
  };

  return (
    <button className='default-button' onClick={handleClick}>{buttonNames[requestType]}</button>
  );
};