import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { RootState } from '../../store'
import { MessagesState, ReceivedMessage } from './types'

const initialState: MessagesState = {
  value: {
    messages: [],
    receiver: '',
    sender: '',
  },
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    messageReceived: (state, action: PayloadAction<ReceivedMessage>) => {
      state.value.messages = [...state.value.messages, action.payload];
    },
    messageSend: (state, action: PayloadAction<string>) => {
      state.value.sender = action.payload;
    },
    setReceiver: (state, action: PayloadAction<string>) => {
      state.value.receiver = action.payload;
    }
  },
})

export const useMessages = () => {
  const { messages, receiver, sender } = useAppSelector((state: RootState) => state.messages.value);
  const dispatch = useAppDispatch();

  return {
    messages,
    receiver,
    sender,
    messageReceived: (newMessage: ReceivedMessage) => dispatch(messagesSlice.actions.messageReceived(newMessage)),
    messageSend: (newSender: string) => dispatch(messagesSlice.actions.messageSend(newSender)),
    setReceiver: (newReceiver: string) => dispatch(messagesSlice.actions.setReceiver(newReceiver)),
  };
};

export const messagesReducer = messagesSlice.reducer;