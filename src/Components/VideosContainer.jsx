import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrending, searchForVideos } from "../rtk/slices/VideoSlice";
import VideoBox from "./VideoBox";

export default function VideosContainer() {
  const videos = useSelector((state) => state.videos);
  const searchedValue = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [header, setHeader] = useState("");

  useEffect(() => {
    dispatch(searchForVideos(searchedValue));
    setHeader(`You Searched For ${searchedValue}`);
  }, [searchedValue]);

  useEffect(() => {
    dispatch(getTrending());
    setHeader(`Trending`);
  }, []);

  return (
    <>
      <p className="text-4xl ml-4">{header}</p>
      <div className="mt-4 backdrop-blur grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-2 p-3">
        {!!videos &&
          videos.map((video) => {
            return (
              <VideoBox
                title={video.title}
                viewCount={video.viewCount}
                thumbnail={video.thumbnail && video.thumbnail[0].url}
                channelThumbnail={
                  video.channelThumbnail && video.channelThumbnail[0].url
                }
                authorName={video.channelTitle}
                published={video.publishedText}
                video_id={video.videoId}
                key={video.videoId}
              />
            );
          })}
      </div>
    </>
  );
}
