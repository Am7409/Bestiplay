import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState : {selectedFilter: Array<string>} = {
  selectedFilter: []
};

const selectFilterSlice = createSlice({
    name:"selectedFilter",
    initialState,
    reducers:{
      setSelectedFilter(state,action:PayloadAction<Array<string>>){
        state.selectedFilter= action.payload;
      }
    }
})

export const {setSelectedFilter} = selectFilterSlice.actions;
export default selectFilterSlice.reducer; 