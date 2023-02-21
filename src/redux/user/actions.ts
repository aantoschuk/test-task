import axios from 'axios';

import { createAsyncThunk } from "@reduxjs/toolkit";

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