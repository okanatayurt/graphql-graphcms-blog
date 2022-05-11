import React, { useEffect, useState } from "react";
import Link from "next/link";
import moment from "moment";
import Image from "next/image";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug, categories]);

  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-3 text-white">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div
          key={post.title}
          className="flex items-center gap-2 bg-white rounded-md mb-3 p-2"
        >
          <div className="relative flex items-center rounded-full border-2 border-gray-500">
            <Image
              src={post.featuredImage.url}
              height={60}
              width={60}
              alt={post.title}
              objectFit="cover "
              className="rounded-full "
            />
          </div>
          <div className="flex-grow">
            <p className="text-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
