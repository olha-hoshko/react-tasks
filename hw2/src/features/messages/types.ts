export type MessagesState = {
  value: {
    messages: ReceivedMessage[],
    receiver: string,
    sender: string,
  },
}

export type ReceivedMessage = {
  from: string,
  text: string,
  to: string,
  time: string,
}