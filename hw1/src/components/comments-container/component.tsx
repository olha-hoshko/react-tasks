import { FC } from "react";
import { DataItem } from "../data-item";
import { DeleteButton } from "../delete-button";
import { Comments, CommentsContainerProps } from "./types";

export const CommentsContainer: FC<CommentsContainerProps> = ({ data }) => {
  return (
    <>
      {
        data.map((comment: Comments, index) => (
          <DataItem index={index} key={index}>
            <p className='comment-email'>{comment.email}</p>
            <p className='comment-title'>{comment.name}</p>
            <p className='comment-body'>{comment.body}</p>
            <div className='data-comment-post'>
              <p className='small-text'>Post №: {comment.postId}</p>
              <p className='small-text'>Comment's id: {comment.id}</p>
            </div>
            <DeleteButton data={data} />
          </DataItem>
        ))
      }
    </>
  );
}