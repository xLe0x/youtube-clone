import numeral from "numeral";
import { Link } from "react-router-dom";

export default function VideoBox({
  thumbnail,
  channelThumbnail,
  title,
  authorName,
  viewCount,
  published,
  video_id,
  isContentDotted,
}) {
  return (
    <>
      {thumbnail && title && (
        <div className="flex flex-col rounded-sm min-w-full m-2 hover:backdrop-brightness-200 ease-out transition-all duration-500">
          <Link to={`/video/${video_id}`}>
            <div className="poster">
              <img
                className="min-w-full max-w-full object-cover max-h-40 rounded-sm w-full"
                src={thumbnail}
              />
            </div>
          </Link>
          <div className="mt-2 p-4">
            <div className="flex w-full">
              {channelThumbnail && (
                <div className="mr-3">
                  <img
                    loading="lazy"
                    className="min-h-[36px] max-h-[36px] min-w-[36px] max-w-[36px] rounded-full"
                    src={channelThumbnail}
                  />
                </div>
              )}
              <div>
                <h4 className="text-base font-medium mb-2">
                  {isContentDotted
                    ? `${title.slice(0, 20)}...`
                    : title.length > 50
                    ? `${title.slice(0, 40)}...`
                    : title}
                </h4>
                <div className="author-info flex flex-col text-gray-300">
                  <p className="name mb-2">
                    {isContentDotted
                      ? `${authorName.slice(0, 15)}...`
                      : authorName}
                  </p>
                  <div className="flex sm:flex-col w-full items-stretch">
                    <p className="mr-4">
                      {numeral(viewCount).format("0.a")} views
                    </p>
                    <p>{published}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
