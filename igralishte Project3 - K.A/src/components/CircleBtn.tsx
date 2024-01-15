import Link from "next/link";
import React from "react";

interface Props {
  placing1: string;
  placing2: string;
  heading: string;
  paragraph: string;
  link?: string;
}
const CircleBtn: React.FC<Props> = ({
  placing1,
  placing2,
  heading,
  paragraph,
  link,
}) => {
  return (
    <div
      className="pt-4 position-absolute circle-homepage d-block mainPageCircleDecoration"
      style={{
        bottom: placing1,
        right: placing2,
      }}
    >
      <Link
        href={`${link}`}
        className="text-dark"
        style={{ textDecoration: `none` }}
      >
        <div className="card-text w-100 text-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="emojione-monotone:sparkles">
              <path
                id="Vector"
                d="M22.625 2C22.625 17.834 14.068 32 2 32C14.068 32 22.625 46.167 22.625 62C22.625 46.167 31.182 32 43.25 32C31.182 32 22.625 17.834 22.625 2ZM47 32C47 39.918 42.723 47 36.687 47C42.723 47 47 54.084 47 62C47 54.084 51.277 47 57.313 47C51.277 47 47 39.918 47 32ZM51.688 2C51.688 9.917 47.411 17 41.375 17C47.41 17 51.688 24.084 51.688 32C51.688 24.084 55.965 17 62.001 17C55.965 17 51.688 9.917 51.688 2Z"
                fill="#232221"
              />
            </g>
          </svg>{" "}
          <p style={{ fontSize: `20px` }} className="w-75 ml-auto mr-auto m-0">
            {heading}
          </p>
          <p className="m-0 pb-1 w-75 ml-auto mr-auto small">{paragraph}</p>
          <img src="/images/arrow.png" alt="" />
        </div>
      </Link>
    </div>
  );
};

export default CircleBtn;
