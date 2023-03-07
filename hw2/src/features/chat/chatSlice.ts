import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { ChatState } from "./types";

const initialState: ChatState = {
  value: false,
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    openCloseChat: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  }
});

export const useChat = () => {
  const isChatOpen = useAppSelector((state: RootState) => state.chat.value);
  const dispatch = useAppDispatch();

  return {
    isChatOpen,
    openCloseChat: (open: boolean) => dispatch(chatSlice.actions.openCloseChat(open)),
  };
};

export const chatReducer = chatSlice.reducer;