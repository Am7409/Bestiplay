import { IGameData } from "@/app/games/[slug]/interface/gameData.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { game: Array<IGameData> } = {
  game: [ {
    uuid: "",
    title: "",
    players_min: "",
    players_max: 0,
    iscurrated: false,
    description: "",
    subtitle: "",
    hashostedgame: "",
    ispremium: false,
    youtubeurl: "",
    minutes: "",
    image: "",
    playslug: "",
    cdnimage: "",
    imagewebp: "",
    displayplayers: "",
    content: "",
    examples: "",
    version: "",
    age: "",
    coverartwebp: "",
    gameplay: "",
    setup: "",
    cdnimagewebp: "",
    ispublic: false,
    coverart: "",
    colour: "",
    slug: "",
    players: "",
    filters: [],
    contents: [],
  }],
};

const gameDataSlice = createSlice({
  name: "gameData",
  initialState,
  reducers: {
    setGamedata(state, action: PayloadAction< Array<IGameData>>) {
      state.game = action.payload;
    },
  },
});

export const { setGamedata } = gameDataSlice.actions;
export default gameDataSlice.reducer;
