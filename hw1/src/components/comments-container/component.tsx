import { FC } from "react";
import { useDataContext } from "../../context/data-context";
import { useThemeContext } from "../../context/theme-context";
import { DataItem } from "../data-item";
import { Comments } from "./types";

export const CommentsContainer: FC = () => {
  const { data } = useDataContext<Comments>();
  const { themeMode } = useThemeContext();

  return (
    <>
      {
        data.map(({ recordId, email, name, body, postId, id }) => (
          <DataItem key={recordId} recordId={recordId}>
            <p className={`comment-email text-${themeMode}`}>{email}</p>
            <p className={`comment-title text-${themeMode}`}>{name}</p>
            <p className={`comment-body text-${themeMode}`}>{body}</p>
            <div className='data-comment-post'>
              <p className='small-text'>Post №: {postId}</p>
              <p className='small-text'>Comment's id: {id}</p>
            </div>
          </DataItem>
        ))
      }
    </>
  );
}