import React from "react";
import BlogTile from "../components/blogTile";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import { fetchData } from "@/utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const revalidate = 604800;

const Blog = async ({ params }: any) => {
  const blogDetails: any = await fetchData("pageBlogPost", {
    "fields.slug": params.slug,
  });

  return (
    <div className="flex lg:flex-row flex-col w-full h-full py-8 px-8 lg:space-x-8 max-md:space-y-8 max-md:mb-8">
      <div className="flex flex-col w-full h-[80vh] max-md:min-h-full bg-slate-100 rounded-lg p-4 space-y-4 overflow-auto noScroll">
        <h1 className="font-bold text-3xl">{blogDetails.fields.title}</h1>
        <div className="border w-full border-black" />
        <p>{documentToReactComponents(blogDetails.fields.content)}</p>
      </div>
      <div className="flex flex-col h-[80vh] lg:w-[40%] w-full space-y-2">
        <h1 className="text-xl font-bold border-b pb-2">Recent Posts</h1>
        <div className="flex flex-col overflow-y-auto noScroll h-full w-full space-y-2">
          {blogDetails.fields.relatedBlogPosts &&
            blogDetails.fields.relatedBlogPosts.map((item: any) => (
              <Link
                key={item.fields.slug}
                href={`/blog/${item.fields.slug}`}
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
