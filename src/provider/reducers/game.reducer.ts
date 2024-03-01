import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameDataSlice from "../slices/gameData.slice"
import gameFilterSlice from "../slices/gameFilter.slice";
import selectedFilter from "../slices/selectedFilter.slice";
import playerFilterSlice from "../slices/playerFilter.slice";

const reducers = combineReducers({
    gameData:gameDataSlice,
    gameFilter:gameFilterSlice,
    filterData:selectedFilter,
    playerFilter:playerFilterSlice
})

export const store = configureStore({
    reducer: reducers
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch