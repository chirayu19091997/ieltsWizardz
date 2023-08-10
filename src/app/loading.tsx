import { Logo } from "@/utils/constants";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col space-y-4 fixed top-0 left-0 z-[2000] bg-white w-screen h-screen items-center justify-center">
      {Logo}
      <div className="custom-loader" />
    </div>
  );
};

export default Loading;
