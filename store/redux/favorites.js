import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorites: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorties: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});


export const addFavorite = favoritesSlice.actions.addFavorites;
export const removeFavorite = favoritesSlice.actions.removeFavorties;
export default favoritesSlice.reducer;
