import { configureStore } from "@reduxjs/toolkit";
import RelatedVideosSlice from "./slices/RelatedVideosSlice";
import SearchSlice from "./slices/SearchSlice";

import VideoSlice from "./slices/VideoSlice";

const store = configureStore({
  reducer: {
    videos: VideoSlice,
    search: SearchSlice,
    relatedVideos: RelatedVideosSlice,
  },
});

export default store;
