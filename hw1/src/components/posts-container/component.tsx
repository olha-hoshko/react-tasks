import { FC } from "react";
import { useDataContext } from "../../context/data-context";
import { useThemeContext } from "../../context/theme-context";
import { DataItem } from "../data-item";
import { Post } from "./types";

export const PostsContainer: FC = () => {
  const { data } = useDataContext<Post>();
  const { themeMode } = useThemeContext();

  return (
    <>
      {
        data.map(({ recordId, title, body, userId, id }) => (
          <DataItem key={recordId} recordId={recordId}>
            <p className={`post-title text-${themeMode}`}>{title}</p>
            <p className={`post-body text-${themeMode}`}>{body}</p>
            <div className='data-user-id'>
              <p className='small-text'>User's id: {userId}</p>
              <p className='small-text'>Post №{id}</p>
            </div>
          </DataItem>
        ))
      }
    </>
  );
}