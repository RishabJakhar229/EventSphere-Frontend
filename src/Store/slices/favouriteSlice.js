import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "Favourites",
  initialState: {
    name : "rishab"
  },
  reducers: {
    toggleFavourites(state , action) {
state.name = action.payload
    },
    removeFavourites(state) {

    },
    clearFavorites(state) {

    },
  },
});

export const {toggleFavourites , removeFavourites , clearFavorites}= favouriteSlice.actions; // update the state

export default favouriteSlice.reducer; // connect with store



