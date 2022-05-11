import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="relative flex flex-col items-center gap-y-6 bg-gray-800 shadow-lg rounded-lg  lg:p-8 pb-12 mb-8 p-5 text-white">
      <div className="absolute -top-16">
        <Image
          src={author.photo.url}
          alt={author.name}
          width={100}
          height={100}
          className="align-middle rounded-full "
        />
      </div>
      <h1 className="pt-6">{author.name}</h1>
      <p>{author.bio}</p>
    </div>
  );
};

export default Author;
