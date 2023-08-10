import Loader from "@/components/loader/Loader";
import React from "react";

const Loading = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <Loader />
    </div>
  );
};

export default Loading;
