"use client";
import React, { Suspense } from "react";
import Loading from "@/app/loading";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface AnimatorProps {
  animationData: string;
  customOptions?: object;
}

const Animator = ({ animationData, customOptions }: AnimatorProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <DotLottieReact src={animationData} loop autoplay {...customOptions} />
    </Suspense>
  );
};

export default Animator;
