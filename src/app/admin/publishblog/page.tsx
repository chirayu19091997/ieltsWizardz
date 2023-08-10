"use client";
import React, { useState } from "react";
import Input from "@/components/Input";

const PublishBlog = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    tag: "",
    thumbnail: "",
  });
  return (
    <div className="flex flex-col items-center space-y-4 p-8 w-full h-full">
      <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl">
        Publish Blog
      </h2>
      <h1 className="self-start font-semibold">Title</h1>
      <input
        maxLength={300}
        placeholder="title"
        className="w-full border rounded-md p-2 shadow-sm"
        onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
      />
      <h1 className="self-start font-semibold">Content</h1>
      <textarea
        maxLength={300}
        placeholder="Content"
        className="w-full border rounded-md p-2 shadow-sm"
        onChange={(e) => setBlogData({ ...blogData, content: e.target.value })}
      />
      <div className="flex w-full space-x-8">
        <div className="flex flex-col w-full space-y-4">
          <h1 className="self-start font-semibold">Tag</h1>
          <input
            maxLength={10}
            placeholder="tag"
            className="w-full border rounded-md p-2 shadow-sm"
            onChange={(e) => setBlogData({ ...blogData, tag: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-full space-y-4">
          <h1 className="self-start font-semibold">Thumbnail</h1>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            accept="image/png, image/jpeg"
            className="w-full p-2"
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full shadow-md h-[70%] items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-primaryColor rounded-md hover:bg-secondaryColor focus:bg-secondaryColor"
        >
          Publish
        </button>
        <button
          className="inline-flex w-full shadow-md h-[70%] items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-gray-600 rounded-md hover:bg-gray-700 focus:bg-gray-700"
          onClick={() =>
            setBlogData({
              title: "",
              content: "",
              tag: "",
              thumbnail: "",
            })
          }
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default PublishBlog;
