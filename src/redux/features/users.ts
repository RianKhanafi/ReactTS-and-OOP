import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";

const initialState: IUser = {
  name: "",
  email: "",
  profession: "",
  role: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, payload: PayloadAction<IUser>) => {
      return payload.payload;
    },
  },
});

export const { setUser } = userSlice.actions; // exports actions
export const selectUser = (state: RootState) => state.users; // export state selector
export default userSlice.reducer;
