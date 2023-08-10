import React, { useEffect } from "react";
import BlogTile from "../components/blogTile";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import { fetchData } from "@/utils/contentful";

export const revalidate = 604800;

const Blog = async ({ params }: any) => {
  const blogDetails = await fetchData("pageBlogPost", {
    "fields.slug": params.slug,
  });
  const Data = new Array(3).fill({
    thumbnailUrl: "/t1.png",
    tag: "Career",
    publishedDate: "April 09, 2022",
    title: "How a visual artist redefines success in graphic design",
  });
  return (
    <div className="flex lg:flex-row flex-col w-full h-full py-8 px-8 lg:space-x-8 max-md:space-y-8 max-md:mb-8">
      <div className="flex flex-col w-full h-[80vh] max-md:min-h-full bg-slate-100 rounded-lg p-4 space-y-4 overflow-auto noScroll">
        <h1 className="font-bold text-3xl">
          How a visual artist redefines success in graphic design
        </h1>
        <div className="border w-full border-black" />
        <p>
          {`A blog (a truncation of "weblog")[1] is an informational website
          published on the World Wide Web consisting of discrete, often informal
          diary-style text entries (posts). Posts are typically displayed in
          reverse chronological order so that the most recent post appears
          first, at the top of the web page. Until 2009, blogs were usually the
          work of a single individual,[citation needed] occasionally of a small
          group, and often covered a single subject or topic. In the 2010s,
          "multi-author blogs" (MABs) emerged, featuring the writing of multiple
          authors and sometimes professionally edited. MABs from newspapers,
          other media outlets, universities, think tanks, advocacy groups, and
          similar institutions account for an increasing quantity of blog
          traffic. The rise of Twitter and other "microblogging" systems helps
          integrate MABs and single-author blogs into the news media. Blog can
          also be used as a verb, meaning to maintain or add content to a blog.`}
        </p>
      </div>
      <div className="flex flex-col h-[80vh] lg:w-[40%] w-full space-y-2">
        <h1 className="text-xl font-bold border-b pb-2">Recent Posts</h1>
        <div className="flex flex-col h-full w-full space-y-2">
          {Data.map((item, index) => (
            <Link
              key={`blog-${index}`}
              href={`/blog/${index}`}
              className="cursor-pointer"
            >
              <BlogTile blogData={item} />
            </Link>
          ))}
        </div>
        <Link
          href="/blog"
          className="flex font-semibold justify-center text-center items-center cursor-pointer transition ease-in-out delay-300 duration-800 hover:space-x-1"
        >
          <p className="text-lg">See all articles</p>
          <BsArrowRightShort size={28} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
