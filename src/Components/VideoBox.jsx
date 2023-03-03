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
}) {
  return (
    <Link
      to={`/video/${video_id}`}
      className="flex flex-col rounded-md max-w-2xl m-4"
    >
      <div className="poster">
        <img
          loading="lazy"
          className="min-w-full max-w-full object-cover max-h-36 rounded-md"
          src={thumbnail}
        />
      </div>
      <div className="mt-3 p-4">
        <div className="flex w-full">
          <div className="mr-4">
            <img
              loading="lazy"
              className="min-h-[36px] max-h-[36px] min-w-[36px] max-w-[36px] rounded-full"
              src={channelThumbnail}
            />
          </div>
          <div>
            <h4 className="text-base font-medium mb-2">{`${title.slice(
              0,
              25
            )}...`}</h4>
            <div className="author-info flex flex-col text-gray-300">
              <p className="name mb-4">{`${authorName.slice(0, 15)}...`}</p>
              <div className="flex sm:flex-col w-full">
                <p className="mr-3">{numeral(viewCount).format("0.a")} views</p>
                <p>{published}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
