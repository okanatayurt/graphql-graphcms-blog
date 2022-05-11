import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

export default function NotFound({ posts }) {
  return (
    <div className="max-w-7xl mx-auto sm:px-10 pb-8 text-gray-800">
      <Head>
        <title>Graph Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center bg-gray-800 shadow-lg rounded-lg  p-10 mb-8 mx-5 text-white">
        Hello, if you are reading this message, you are either on a page you
        should not be on or this page is not yet complete.
      </div>
    </div>
  );
}
