import Loader from "@/components/loader/Loader";
import React from "react";

const Loading = () => {
  return (
    <div className="flex fixed top-0 left-0 z-[2000] bg-white w-screen h-screen items-center justify-center">
      <Loader />
    </div>
  );
};

export default Loading;
