import { FC } from "react";
import { useSocketContext } from "../../context/socket-context";

export const GreetingField: FC = () => {
  const { getUserId } = useSocketContext();

  return (
    <div className='greeting-field'>
      <p className='greeting'>Hello, user {getUserId()}!</p>
      <p className='greeting-small'>Please, choose a person from the list on the right to start chatting.</p>
    </div>
  );
}