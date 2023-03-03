import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  initialState: "",
  name: "SearchSlice",
  reducers: {
    setSearchValue: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export default SearchSlice.reducer;

export const { setSearchValue } = SearchSlice.actions;
