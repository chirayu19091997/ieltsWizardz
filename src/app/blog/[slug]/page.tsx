import React from "react";
import BlogTile from "../components/blogTile";
import Link from "next/link";
import { fetchData } from "@/utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import TextHover from "@/components/TextHover";

export const revalidate = 604800;

const Blog = async ({ params }: any) => {
  const blogDetails: any = await fetchData("pageBlogPost", {
    "fields.slug": params.slug,
  });

  return (
    <div className="flex lg:flex-row flex-col w-full h-full py-8 px-8 lg:space-x-8 max-md:space-y-8 max-md:mb-8">
      <div className="flex flex-col w-full max-md:min-h-full rounded-lg p-4 space-y-4 overflow-auto noScroll">
        <img
          src={`https:${blogDetails.fields.featuredImage.fields.file.url}`}
          className="w-full object-cover border rounded-md"
        />
        <h1 className="font-bold text-3xl">{blogDetails.fields.title}</h1>
        <div className="border w-full border-black" />
        <div>{documentToReactComponents(blogDetails.fields.content)}</div>
      </div>
      <div className="flex flex-col lg:w-[40%] w-full space-y-2 py-4">
        <h1 className="text-xl font-bold border-b pb-2">Recent Posts</h1>
        <div className="flex flex-col overflow-y-auto noScroll w-full space-y-2">
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
          className="flex font-semibold justify-center text-center items-center"
        >
          <TextHover text="See all articles" className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
