import { getOneVideo } from "../rtk/slices/VideoSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Video() {
  const video = useSelector((state) => state.videos);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneVideo(id));
  }, [id]);

  return (
    <>
      {video && (
        <div className="mx-5 px-3 flex justify-between item-center p-2 mt-12 sm:flex-row flex-col mb-16">
          <div className="sm:w-2/4 w-full">
            <iframe
              width="100%"
              height="409"
              src={`https://www.youtube.com/embed/${id}`}
              allowFullScreen
            ></iframe>
          </div>
          <div className="ml-0 p-1 sm:p-3 text-center sm:text-start sm:ml-4 sm:w-2/4 mt-3 w-full">
            <h3 className="text-3xl mb-4 font-bold">{video.title}</h3>
            <p>{video.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
