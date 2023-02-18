import { FC, MouseEventHandler } from "react";
import { useDataContext } from "../../context/data-context";

export const DeleteButton: FC<{ recordId: string }> = ({ recordId }) => {
  const { filterData } = useDataContext();
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    filterData(recordId);
  }
  return (
    <button onClick={handleClick} className='delete-button'>Delete</button>
  );
};