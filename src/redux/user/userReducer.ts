import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchUsers } from './actions';

interface IUserReducerState {
  users: IUser[];
  loading: boolean;
  error: string | undefined;
}

const initialState: IUserReducerState = {
  users: [],
  loading: false,
  error: undefined
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // making request
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    })
    // request success
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = undefined;
    })
    // request fail
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  },
})