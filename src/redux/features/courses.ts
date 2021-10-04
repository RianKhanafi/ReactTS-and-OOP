import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";

interface RCourses {
  courses: ICourses["courses"] & { length: number };
  count?: number;
}

const initialState: RCourses = {
  courses: [],
  count: 0,
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, payload: PayloadAction<RCourses>) => {
      state.courses = payload.payload.courses.reduce((a, b) => {
        a[b.id] = b;
        return a;
      }, {});
      state.count = payload.payload.courses.length;
    },
    setWatch: (state, payload: PayloadAction<any>) => {
      return {
        ...state,
        count: state.count,
        courses: {
          ...state.courses,
          [payload.payload.id]: {
            ...state.courses[payload.payload.id],
            ...payload.payload,
          },
        },
      };
    },
  },
});

export const { setCourses, setWatch } = coursesSlice.actions; // exports actions
export const selectCourse = (state: RootState) => state.courses; // export state selector
export default coursesSlice.reducer;
