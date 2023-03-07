import { configureStore } from '@reduxjs/toolkit'
import { chatReducer } from './features/chat';
import { messagesReducer } from './features/messages';
import { usersReducer } from './features/users';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    messages: messagesReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;