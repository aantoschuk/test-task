import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

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

export const fetchUsers = createAsyncThunk(
  'user/fetchAllUsers',
  async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      return response.data;
    } catch (error) {
      // just throw whateva happens
      throw new Error(`${error}`);
    }
  }
)

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