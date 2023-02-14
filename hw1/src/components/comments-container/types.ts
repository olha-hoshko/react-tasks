import { RequestDataContainerProps } from "../../global-types";

export type Comments = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
};

export type CommentsContainerProps = RequestDataContainerProps;