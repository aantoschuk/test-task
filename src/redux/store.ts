import { configureStore } from "@reduxjs/toolkit";

import { testReducer } from "./testReducer";
import { userReducer } from "./user/userReducer";

export const store = configureStore({
  reducer: {
    [testReducer.name]: testReducer.reducer,
    [userReducer.name]: userReducer.reducer
  }
})

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
