import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import usresReducres from "./features/users";
import coursesReducer from "./features/courses";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usresReducres,
    courses: coursesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
