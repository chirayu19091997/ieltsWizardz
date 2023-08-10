import Image from "next/image";
import React from "react";

const BlogTile = () => {
  return (
    <div className="flex space-x-4 py-4">
      <Image
        src="/t1.png"
        alt="Vercel Logo"
        className="rounded-2xl border-2"
        width={100}
        height={100}
        priority
      />
      <div>
        <div className="flex items-center space-x-2">
          <p>Career</p>
          <div className="h-1 w-1 rounded-full bg-black" />
          <p>April 09, 2022</p>
        </div>
        <h1 className="font-bold text-md">
          How a visual artist redefines success in graphic design
        </h1>
      </div>
    </div>
  );
};

export default BlogTile;
