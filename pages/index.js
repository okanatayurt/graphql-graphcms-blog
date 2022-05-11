import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="max-w-7xl mx-auto sm:px-10 pb-8 text-gray-800">
      <Head>
        <title>Graph Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid-cols-1 grid gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard key={post.title} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
