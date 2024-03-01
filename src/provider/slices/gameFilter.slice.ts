
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  filters: Array<string>;
} = {
  filters: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action:PayloadAction<Array<string>>) {
      state.filters = action.payload;
    },
  },
});

export const {setFilters} = filtersSlice.actions;

export default filtersSlice.reducer;
