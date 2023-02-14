import { FC } from "react";
import { DataItem } from "../data-item";
import { DeleteButton } from "../delete-button";
import { Post, PostsContainerProps } from "./types";

export const PostsContainer: FC<PostsContainerProps> = ({ data }) => {
  return (
    <>
      {
        data.map((post: Post, index) => (
          <DataItem index={index} key={index}>
            <p className='post-title'>{post.title}</p>
            <p className='post-body'>{post.body}</p>
            <div className='data-user-id'>
              <p className='small-text'>User's id: {post.userId}</p>
              <p className='small-text'>Post №{post.id}</p>
            </div>
            <DeleteButton data={data} />
          </DataItem>
        ))
      }
    </>
  );
}