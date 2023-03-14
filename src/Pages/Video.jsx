import { getOneVideo, searchForVideos } from "../rtk/slices/VideoSlice";
import { getRelatedVideos } from "../rtk/slices/RelatedVideosSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoBox from "../Components/VideoBox";
import parse from "html-react-parser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Video() {
  const video = useSelector((state) => state.videos);
  const relatedVideos = useSelector((state) => state.relatedVideos);
  const searchedValue = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [videosTitle, setVideosTitle] = useState("Related Videos");
  const [isOpened, setIsOpened] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSubs, setIsSubs] = useState(false);

  function handleDesc() {
    setIsOpened(!isOpened);
  }

  function handleShare() {
    navigator.clipboard.writeText(window.location.href);
    setShowMessage(true);
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(handler);
  }, [showMessage]);

  useEffect(() => {
    dispatch(getOneVideo(id));
    dispatch(getRelatedVideos(id));
  }, [id]);

  useEffect(() => {
    dispatch(searchForVideos(encodeURIComponent(searchedValue)));
    setVideosTitle(`You Searched For "${searchedValue}"`);
  }, [searchedValue]);

  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 mt-4">
      <div className="flex flex-col lg:min-w-[850px]">
        {typeof video == "object" && (
          <>
            <iframe
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${id}`}
              allowFullScreen
            ></iframe>
            <div
              className="desc bg-[#3f3f3f] rounded-b-sm cursor-pointer"
              onClick={handleDesc}
            >
              <div className="ml-0 p-4 text-center sm:text-start sm:ml-4 mt-3 transition-all">
                <h3 className="text-3xl mb-4 font-bold">{video.title}</h3>
                {isOpened ? (
                  <p className="max-w-full overflow-scroll">
                    {video.description && parse(video.description)}
                  </p>
                ) : (
                  <p className="max-w-full overflow-scroll opacity-20">
                    {video.description &&
                      parse(video.description.slice(0, 300))}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-around mt-8 mb-4 select-none">
              <div
                className="flex items-center justify-between backdrop-brightness-200 py-2 px-4 rounded-full cursor-pointer"
                onClick={() => setIsLiked(!isLiked)}
              >
                {!isLiked ? (
                  <>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <p className="mx-2">Like</p>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faThumbsDown} />
                    <p className="mx-2">DisLike</p>
                  </>
                )}
              </div>
              <div
                className="flex items-center justify-between backdrop-brightness-200 py-2 px-4 rounded-full cursor-pointer"
                onClick={handleShare}
              >
                <FontAwesomeIcon icon={faShare} />
                <p className="mx-2">Share</p>
              </div>
              <div
                className="flex items-center justify-between backdrop-brightness-200 py-2 px-4 rounded-full cursor-pointer"
                onClick={() => setIsSubs(!isSubs)}
              >
                {!isSubs ? (
                  <>
                    <FontAwesomeIcon icon={faPlus} />
                    <p className="mx-2">Subscribe</p>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faMinus} />
                    <p className="mx-2">UnSubscribe</p>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col ml-auto max-md:mx-auto justify-between items-center max-md:justify-center max-md:mt-8">
        {typeof relatedVideos != "string" && (
          <h3 className="text-xl">{videosTitle}</h3>
        )}
        {Array.isArray(relatedVideos) && !Array.isArray(video)
          ? relatedVideos.map((related) => {
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
            })
          : Array.isArray(video) &&
            video.map((vid) => {
              return (
                <VideoBox
                  isContentDotted={false}
                  title={vid.title}
                  viewCount={vid.viewCount}
                  thumbnail={
                    vid.thumbnail[1]
                      ? vid.thumbnail[1].url
                      : vid.thumbnail[0].url
                  }
                  authorName={vid.channelTitle}
                  published={vid.publishedText}
                  video_id={vid.videoId}
                  key={vid.videoId}
                />
              );
            })}
        {typeof relatedVideos == "string" && (
          <p
            className="max-w-xs mx-auto
            my-4
        "
          >
            {relatedVideos}
          </p>
        )}
      </div>
      {showMessage ? (
        <div className="px-3 py-1 bg-white text-[#0f0f0f] fixed bottom-4 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-colors duration-500 rounded-md">
          Link Copied To Clipboard
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
