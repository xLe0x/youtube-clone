import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTrending } from "../rtk/slices/VideoSlice";

export default function Hero() {
  const video = useSelector((state) => state.videos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrending());
  }, []);

  return (
    <Link
      to={`/video/${
        Array.isArray(video) && video.length > 0 && video[0].videoId
      }`}
      className="mx-2 flex justify-between item-center mt-12 sm:flex-row flex-col mb-16  hover:backdrop-brightness-200 duration-200 transition-all"
    >
      <div className="sm:w-1/2 w-full">
        <iframe
          width="100%"
          height="409"
          src={`https://www.youtube.com/embed/${
            Array.isArray(video) && video.length > 0 && video[0].videoId
          }`}
        ></iframe>
      </div>
      <div className="ml-0 p-1 sm:p-3 text-center sm:text-start sm:ml-4 sm:w-1/2 mt-3 w-full">
        <h3 className="text-3xl mb-4 font-bold max-w-full">
          {Array.isArray(video) && video.length > 0
            ? video[0].title
            : ".................."}
        </h3>
        <p className="max-w-full">
          {Array.isArray(video) && video.length > 0
            ? `${video[0].description.slice(0, 200)}...`
            : "............................................."}
        </p>
      </div>
    </Link>
  );
}
