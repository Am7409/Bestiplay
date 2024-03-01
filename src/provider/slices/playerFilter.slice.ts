import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState:{playerFilter:number} = {
 playerFilter: 0
}

const playerFilterSlice = createSlice({
    name:"playerFilter",
    initialState,
    reducers:{
        setPlayerFilter(state,action:PayloadAction<number>){
            state.playerFilter= action.payload;
        }
    }
})

export const {setPlayerFilter} = playerFilterSlice.actions;
export default  playerFilterSlice.reducer;