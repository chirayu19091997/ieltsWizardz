"use client";
import React, { Suspense } from "react";
//@ts-ignore
import Lottie from "lottie-react";
import Loading from "@/app/loading";

interface AnimatorProps {
  animationData: object;
  customOptions?: object;
}

const Animator = ({ animationData, customOptions }: AnimatorProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <Lottie {...customOptions} loop autoplay animationData={animationData} />
    </Suspense>
  );
};

export default Animator;
