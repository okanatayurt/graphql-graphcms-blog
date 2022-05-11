import React from "react";
import Image from "next/image";
import moment from "moment";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="bg-gray-800 shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="flex flex-col items-center overflow-hidden shadow-md mb-6 gap-y-5 bg-white rounded-md text-gray-800">
        <div className="flex items-center justify-center shadow-lg rounded-t-lg lg:rounded-t-lg  w-full mb-5">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            className=""
            height={320}
            width={725}
            objectFit="cover"
          />
        </div>
        <h1 className="text-center  text-2xl sm:text-3xl font-semi-bold px-5 sm:px-10">
          {post.title}
        </h1>
        <div className="block lg-flex text-center items-center justify-center mb-8 w-full px-5 sm:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 md:gap-10 mb-10">
            <div className="flex gap-x-2 items-center justify-center ">
              <Image
                src={post.author.photo.url}
                alt={post.author.name}
                width={30}
                height={30}
                className="align-middle rounded-full"
              />
              <h4 className="text-sm sm:text-base">{post.author.name}</h4>
            </div>
            <div className="flex items-center justify-center gap-x-1 font-medium text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm sm:text-base">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
