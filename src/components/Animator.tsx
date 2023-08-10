"use client";
import React from "react";
import Lottie from "react-lottie";

interface AnimatorProps {
  animationData: any;
  height?: string;
  width?: string;
  customOptions?: object;
}

const Animator = ({
  animationData,
  height,
  width,
  customOptions,
}: AnimatorProps) => {
  return (
    <div>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          ...customOptions,
        }}
        height={height}
        width={width}
      />
    </div>
  );
};

export default Animator;
