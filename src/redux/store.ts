import { configureStore } from "@reduxjs/toolkit";

import { testReducer } from "./reducers/testReducer";
import { userReducer } from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    [testReducer.name]: testReducer.reducer,
    [userReducer.name]: userReducer.reducer
  }
})

export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
