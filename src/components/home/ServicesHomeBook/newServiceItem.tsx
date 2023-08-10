"use client";
import React, { useState } from "react";
import "./newServiceItem.css";
import { homeServiceSections } from "@/utils/constants";
import { BsFillBalloonHeartFill } from "react-icons/bs";

const NewServiceItem = () => {
  const [customClass, setcustomClass] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      className={`book ${customClass}`}
      onClick={() => {
        setcustomClass("booka");
        setActiveIndex(activeIndex + 1);
        if (activeIndex + 1 > homeServiceSections.length - 1) {
          setcustomClass("");
          setTimeout(() => {
            setActiveIndex(0);
          }, 480);
        }
      }}
    >
      {homeServiceSections.map((section, idx) => (
        <div
          key={`hs-${idx}`}
          className={`w-full  ${idx != activeIndex && "hidden"}  ${
            idx < activeIndex ? "cover" : ""
          }`}
        >
          {idx >= activeIndex ? (
            <div className="flex flex-col space-y-4 text-center items-center px-8 overflow-hidden">
              {section.logo && section.logo}
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl ">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 ">
                {section.subtitle}
              </p>
            </div>
          ) : (
            <BsFillBalloonHeartFill size={200} color="red" />
          )}
        </div>
      ))}
    </div>
  );
};

export default NewServiceItem;
