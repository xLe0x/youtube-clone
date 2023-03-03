import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTrending = createAsyncThunk(
  "VideoSlice/getTrending",
  async () => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/trending",
      params: { geo: "US", lang: "en" },
      headers: {
        "X-RapidAPI-Key": "ea23c3149bmsh5dc57a6b7b012c6p1ac29ajsnc9bec8788b41",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    const data = await axios.request(options);
    const res = await data.data.data;
    return res;
  }
);

export const getOneVideo = createAsyncThunk(
  "VideoSlice/getOneVideo",
  async (arg) => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/video",
      params: { id: arg },
      headers: {
        "X-RapidAPI-Key": "ea23c3149bmsh5dc57a6b7b012c6p1ac29ajsnc9bec8788b41",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };
    const data = await axios.request(options);
    const res = await data.data;
    return res;
  }
);

export const searchForVideos = createAsyncThunk(
  "VideoSlice/searchForVideos",
  async (arg) => {
    const options = {
      method: "GET",
      url: "https://youtube-v3-alternative.p.rapidapi.com/search",
      params: { query: arg, geo: "US", lang: "en" },
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

const VideoSlice = createSlice({
  initialState: null,
  name: "VideoSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrending.fulfilled, (state, action) => {
      state = [...action.payload];
      return state;
    });
    builder.addCase(getOneVideo.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
    builder.addCase(searchForVideos.fulfilled, (state, action) => {
      if (action.payload) {
        state = [...action.payload];
        return state;
      }
    });
  },
});

export default VideoSlice.reducer;
