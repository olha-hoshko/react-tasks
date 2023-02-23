import { Socket } from 'socket.io-client';

export type ParentContainerProps = {
  children: JSX.Element | JSX.Element[],
}

export type SocketProps = {
  socket: Socket,
}