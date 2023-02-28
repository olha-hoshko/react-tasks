import { FC } from "react";
import { useChatContext } from "../../context";

export const GreetingField: FC = () => {
  const { socket } = useChatContext();

  return (
    <div className='greeting-field'>
      <p className='greeting'>Hello, user {socket.id}!</p>
      <p className='greeting-small'>Please, choose a person from the list on the right to start chatting.</p>
    </div>
  );
}