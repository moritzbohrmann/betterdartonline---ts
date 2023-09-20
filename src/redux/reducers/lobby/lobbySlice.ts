import initialState from "./state";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPlayer } from "./types";

const lobbySlice = createSlice({
   name: "lobby",
   initialState,
   reducers: {
      clear: (state) => {
         state.players.splice(0, state.players.length);
      },
      add: (state, action: PayloadAction<IPlayer>) => {
         state.players.push(action.payload);
      },
      remove: (state, action: PayloadAction<IPlayer>) => {
         state.players.splice(state.players.indexOf(action.payload), 1);
      },
      filter: (state, action: PayloadAction<string>) => {
         state.filter = action.payload;
      },
   },
});

export const { clear, add, remove, filter } = lobbySlice.actions;

export default lobbySlice.reducer;
