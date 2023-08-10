import Image from "next/image";
import React from "react";

interface BlogTileProps {
  blogData: blogDataProps;
}

interface blogDataProps {
  thumbnailUrl: string;
  tag: string;
  publishedDate: string;
  title: string;
}

const BlogTile = ({ blogData }: BlogTileProps) => {
  return (
    <div className="flex space-x-4 py-4">
      <Image
        src={blogData.thumbnailUrl}
        alt="Blog Thumbnail"
        className="rounded-2xl border-2"
        width={100}
        height={100}
        priority
      />
      <div>
        <div className="flex items-center space-x-2">
          <p>{blogData.tag}</p>
          <div className="h-1 w-1 rounded-full bg-black" />
          <p>{blogData.publishedDate}</p>
        </div>
        <h1 className="font-bold text-md">{blogData.title}</h1>
      </div>
    </div>
  );
};

export default BlogTile;
