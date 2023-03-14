import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getRelatedVideos = createAsyncThunk(
  "RelatedVideosSlice/getRelatedVideos",
  async (arg) => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/related",
      params: { id: arg, geo: "US", lang: "en" },
      headers: {
        "X-RapidAPI-Key": "148b81b210mshf4c45e0a3d564a5p1ef4c4jsn8557cb7ea92b",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };
    const data = await axios.request(options);
    const res = await data.data.data;
    return res;
  }
);

const RelatedVideosSlice = createSlice({
  initialState: [],
  name: "RelatedVideosSlice",
  extraReducers: (builder) => {
    builder.addCase(getRelatedVideos.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
    builder.addCase(getRelatedVideos.rejected, (state, action) => {
      state = "something went wrong please check your network connection";
      return state;
    });
  },
});

export default RelatedVideosSlice.reducer;
