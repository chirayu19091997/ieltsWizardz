"use client";
import React, { useState } from "react";
import BlogTile from "./components/blogTile";
import Link from "next/link";
import { fetchData } from "../../utils/contentful";
import FilterDropdown from "./components/filterDropdown";

export const revalidate = 1;

const BlogList = async () => {
  const [activeFilter, setActiveFilter] = useState("");
  const displayBlogs: any = await fetchData("pageBlogPost", {
    "fields.category": activeFilter,
  });

  return (
    <div className="flex flex-col w-full h-full p-10">
      <div className="flex flex-col lg:w-[40%] space-y-4 py-8">
        <h1 className="font-bold text-3xl">Read our latest collection</h1>
        <p>Tiny capsules on Study Abroad wisdom from our Wizards!</p>
      </div>
      <FilterDropdown
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div className="w-full h-full flex flex-col lg:flex-row lg:flex-wrap justify-between">
        {displayBlogs &&
          displayBlogs.map((item: any) => (
            <Link
              key={item.fields.slug}
              href={`/blog/${item.fields.slug}`}
              className="lg:w-[45%] cursor-pointer"
            >
              <BlogTile blogData={item} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
