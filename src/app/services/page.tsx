"use client";
import React, { useState } from "react";
import ServiceItem from "./components/ServiceItem";
import { serviceSections } from "@/utils/constants";
// @ts-ignore
import { Slide } from "react-reveal";
const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCardsData, setActiveCardsData] = useState(
    serviceSections[0].data
  );

  return (
    <div className="flex bg-gray-100 flex-col items-center space-y-8 p-8">
      <h1 className="text-4xl">Our Services</h1>
      <div className="flex flex-col w-full h-full space-y-4 px-8">
        <div className="flex flex-wrap justify-center items-center w-full">
          {serviceSections.map((item: any, index: number) => (
            <p
              key={`tab-${index}`}
              className={`p-2 m-1 px-4 rounded-full cursor-pointer ${
                activeIndex === index ? "bg-primaryColor" : "bg-slate-100"
              } ${
                activeIndex === index
                  ? "text-secondaryTextColor"
                  : "text-primaryTextColor"
              }`}
              onClick={() => {
                setActiveIndex(index);
                setActiveCardsData(item.data);
              }}
            >
              {item.tab}
            </p>
          ))}
        </div>
        <Slide left spy={activeIndex}>
          <div className="flex justify-center lg:flex-row max-md:flex-col flex-wrap h-full w-full lg:space-x-4 max-md:space-y-4 p-4">
            {activeCardsData.map((cardData, cardIndex) => (
              <ServiceItem
                cardData={cardData}
                activeIndex={activeIndex}
                key={`card-${cardIndex}`}
              />
            ))}
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Services;
