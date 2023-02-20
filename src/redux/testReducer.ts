import { createSlice } from '@reduxjs/toolkit'
import { TRootState } from './store';

interface ITestReducerState {
  value: string;
}

const initialState: ITestReducerState = {
  value: 'Hello World',
};

export const counterReducer = createSlice({
  name: 'test',
  initialState,
  reducers: {
    testAction: (state) => {
      state.value = 'Hello from redux'
    }
  }
});

export const { testAction } = counterReducer.actions;
export const selectValue = (state: TRootState) => state.test.value;