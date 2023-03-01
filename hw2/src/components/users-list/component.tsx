import { FC } from "react";
import { useChatContext } from "../../context/chat-context";
import { useSocketContext } from "../../context/socket-context";
import { User } from "../user/component";

export const UsersList: FC = () => {
  const { users } = useChatContext();
  const { getUserId } = useSocketContext();

  return (
    <div className='users-list'>
      <div className='users-list-header'>
        <p>Users online:</p>
      </div>
      {
        users.filter((key: string) => key !== getUserId()).map((key: string) => {
          return <User userId={key} userSymbol={key.slice(0, 1)} key={key} />;
        })
      }
    </div>
  );
}