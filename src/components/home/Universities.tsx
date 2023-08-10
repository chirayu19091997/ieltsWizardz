"use client";
import { logoSlides } from "@/utils/constants";
import React, { useEffect, useState } from "react";
//@ts-ignore
import { Fade } from "react-reveal";

const Universities = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex < logoSlides.length - 1) {
      setTimeout(() => {
        setActiveIndex(activeIndex + 1);
      }, 3000);
    } else {
      setTimeout(() => {
        setActiveIndex(0);
      }, 3000);
    }
  }, [activeIndex]);

  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="xl:flex xl:items-center xl:justify-between">
          {/* <h2 className="text-xl max-w-[20%] w-[20%] font-bold z-[2000] bg-white text-center text-gray-500 xl:text-left font-pj">
            700+ Big Universities trust us
          </h2> */}
          <Fade left spy={activeIndex}>
            <div className="grid w-full bg-gray-100 items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-4">
              {logoSlides[activeIndex].map((item, index) => (
                <img
                  key={`logo-${activeIndex}-${index}`}
                  className="object-contain w-auto mx-auto h-32 mix-blend-multiply"
                  src={item}
                  alt=""
                />
              ))}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Universities;
