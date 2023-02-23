import { MessageTypes } from "../../enums";

export type MessageProps = {
  type: MessageTypes,
  userId: string,
  text: string,
}