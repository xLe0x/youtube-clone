import { getOneVideo } from "../rtk/slices/VideoSlice";
import { getRelatedVideos } from "../rtk/slices/RelatedVideosSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../Components/Container";
import VideoBox from "../Components/VideoBox";

export default function Video() {
  const video = useSelector((state) => state.videos);
  const relatedVideos = useSelector((state) => state.relatedVideos);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneVideo(id));
    dispatch(getRelatedVideos(id));
  }, [id]);
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 mt-4 place-content-center">
      <div className="flex flex-col">
        {video && (
          <>
            <iframe
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${id}`}
              allowFullScreen
            ></iframe>
            <div className="desc bg-[#3f3f3f] rounded-sm">
              <div className="ml-0 p-4 text-center sm:text-start sm:ml-4 mt-3">
                <h3 className="text-3xl mb-4 font-bold">{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="related flex flex-col max-md:mx-auto ml-auto justify-between items-center max-md:items-stretch max-md:justify-center max-md:mt-4">
        {relatedVideos &&
          relatedVideos.map((related) => {
            return (
              <VideoBox
                isContentDotted={false}
                title={related.title}
                viewCount={related.viewCount}
                thumbnail={
                  related.thumbnail[1]
                    ? related.thumbnail[1].url
                    : related.thumbnail[0].url
                }
                authorName={related.channelTitle}
                published={related.publishedText}
                video_id={related.videoId}
                key={related.videoId}
              />
            );
          })}
      </div>
    </div>
  );
}
