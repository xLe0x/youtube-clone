import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./slices/SearchSlice";

import VideoSlice from "./slices/VideoSlice";

const store = configureStore({
  reducer: {
    videos: VideoSlice,
    search: SearchSlice,
  },
});

export default store;
