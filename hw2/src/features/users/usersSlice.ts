import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { RootState } from '../../store'
import { UsersState } from './types'

const initialState: UsersState = {
  value: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersReceived: (state, action: PayloadAction<string[]>) => {
      state.value = [...action.payload];
    },
  },
})

export const useUsers = () => {
  const users = useAppSelector((state: RootState) => state.users.value);
  const dispatch = useAppDispatch();

  return {
    users,
    usersReceived: (newUsersArray: string[]) => dispatch(usersSlice.actions.usersReceived(newUsersArray)),
  };
};

export const usersReducer =  usersSlice.reducer;