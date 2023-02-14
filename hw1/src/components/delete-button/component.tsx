import { FC, MouseEventHandler } from "react";
import { useDataContext } from "../../context";
import { DeleteButtonProps } from "./types";

export const DeleteButton: FC<DeleteButtonProps> = ({ data }) => {
  const { setData } = useDataContext();
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const dataContainerKey: number = Number(event.currentTarget.parentElement?.getAttribute('data-key'));
    const newData = data.filter((_, index) => index !== dataContainerKey);
    setData(newData);
  }
  return (
    <button onClick={handleClick} className='delete-button'>Delete</button>
  );
};