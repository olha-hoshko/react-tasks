import { FC } from "react";
import { useChatContext } from "../../context/context";
import { User } from "../user/component";

export const UsersList: FC = () => {
  const { users } = useChatContext();

  return (
    <div className='users-list'>
      {
        users.map((key: string) => {
          return <User userId={key} userSymbol={key.slice(0, 1)} key={key} />;
        })
      }
    </div>
  );
}