import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./testReducer";

export const store = configureStore({
  reducer: {
    [counterReducer.name]: counterReducer.reducer
  }
})

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
