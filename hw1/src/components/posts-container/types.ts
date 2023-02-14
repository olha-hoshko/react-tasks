import { RequestDataContainerProps } from "../../global-types";

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export type PostsContainerProps = RequestDataContainerProps;