"use client";
import React, { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import BlogTile from "./components/blogTile";
import Link from "next/link";
import { fetchData } from "@/utils/contentful";

export const revalidate = 604800;

const BlogList = () => {
  const [allBlogs, setAllBlogs] = useState<any>([]);
  const [displayBlogs, setDisplayBlogs] = useState<any>([]);

  useEffect(() => {
    fetchData("pageBlogPost").then((res: any) => {
      setAllBlogs(res);
      if (res.length > 6) {
        setDisplayBlogs(res.splice(0, 6));
      } else {
        setDisplayBlogs(res);
      }
    });
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
        <div className="w-full h-full flex flex-col lg:flex-row lg:flex-wrap justify-between">
          {displayBlogs &&
            displayBlogs.map((item: any) => (
              <Link
                key={item.fields.slug}
                href={`/blog/${item.fields.slug}`}
                className="lg:w-[40%] cursor-pointer"
              >
                <BlogTile blogData={item} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
