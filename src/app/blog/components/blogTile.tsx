import moment from "moment";
import Image from "next/image";
import React from "react";

interface BlogTileProps {
  blogData: {
    fields: {
      thumbnail: any;
      category: string;
      publishedDate: string;
      title: string;
    };
  };
}

const BlogTile = ({ blogData }: BlogTileProps) => {
  const { thumbnail, title, publishedDate, category } = blogData.fields;
  return (
    <div className="flex space-x-4 py-4">
      <div className="w-24 h-24">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt="Blog Thumbnail"
          className="rounded-2xl w-24 h-24 object-cover border-2"
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          priority
        />
      </div>
      <div className="flex w-full flex-col">
        <div className="flex items-center space-x-2">
          <p>{category}</p>
          <div className="h-1 w-1 rounded-full bg-black" />
          <p>{moment(publishedDate).format("MMM DD, YYYY")}</p>
        </div>
        <h1 className="font-bold text-md">{title}</h1>
      </div>
    </div>
  );
};

export default BlogTile;
