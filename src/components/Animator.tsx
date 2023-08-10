"use client";
import React from "react";
//@ts-ignore
import Lottie from "lottie-react";

interface AnimatorProps {
  animationData: object;
  customOptions?: object;
}

const Animator = ({ animationData, customOptions }: AnimatorProps) => {
  return (
    <Lottie {...customOptions} loop autoplay animationData={animationData} />
  );
};

export default Animator;
