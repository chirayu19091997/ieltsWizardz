"use client";
import React, { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import BlogTile from "./components/blogTile";
import Link from "next/link";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Blog",
// };

const BlogList = () => {
  const [allBlogs, setAllBlogs] = useState<any>([]);
  const [displayBlogs, setDisplayBlogs] = useState<any>([]);

  useEffect(() => {
    const Data = new Array(12).fill(0);
    setAllBlogs([...Data]);
    setDisplayBlogs([...Data.splice(0, 6)]);
  }, []);

  const onShowAllClick = () => {
    setDisplayBlogs(allBlogs);
  };

  return (
    <div>
      <div className="flex flex-col w-full h-full p-10">
        <div className="flex flex-col lg:w-[40%] space-y-4 py-8">
          <h1 className="font-bold text-3xl">Read latest collection</h1>
          <p>
            Create custom landing pages with Rareblocks that converts more
            visitors than any website.
          </p>
          <div
            className="flex font-semibold items-center cursor-pointer transition ease-in-out delay-300 duration-800 hover:space-x-1"
            onClick={onShowAllClick}
          >
            <p className="text-lg">See all articles</p>
            <BsArrowRightShort size={28} />
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:flex-wrap justify-between px-4">
          {displayBlogs.map((item: any, index: number) => (
            <Link href={`/blog/${index}`} className="lg:w-[40%] cursor-pointer">
              <BlogTile />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
