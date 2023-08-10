"use client";
import React, { useState } from "react";
import ServiceItem from "./components/ServiceItem";
import { serviceSections } from "@/utils/constants";
// @ts-ignore
import { Slide } from "react-reveal";
import { useSearchParams } from "next/navigation";
import Pill from "@/components/Pill";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(
    Number(useSearchParams().get("serviceId")) || 0
  );
  const [activeSubTab, setActiveSubTab] = useState(0);

  return (
    <div className="flex relative flex-col items-center space-y-8">
      <img
        src="/oooscillate.svg"
        className="absolute object-cover opacity-20 flex w-full overflow-hidden h-full"
      />
      <h1 className="text-4xl">Our Services</h1>
      <div className="flex z-10 w-full h-full space-y-4">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div className="flex flex-wrap justify-center items-center">
            {serviceSections.map((item: any, index: number) => (
              <Pill
                key={`tab-m-${index}`}
                text={item.tab}
                isActive={activeIndex === index}
                onClick={() => {
                  setActiveIndex(index);
                  setActiveSubTab(0);
                }}
              />
            ))}
          </div>
          <div className="flex w-full h-full space-x-8 px-8">
            <Slide left>
              <div className="flex flex-col w-[20%] py-8">
                {serviceSections[activeIndex].subTabs.length > 1 &&
                  serviceSections[activeIndex].subTabs.map(
                    (sub: any, index: number) => (
                      <Pill
                        key={`tab-s-${index}`}
                        text={sub.tab}
                        isActive={activeSubTab === index}
                        onClick={() => {
                          setActiveSubTab(index);
                        }}
                      />
                    )
                  )}
              </div>
            </Slide>
            <Slide right spy={activeIndex}>
              <div className="flex lg:flex-row max-md:flex-col flex-wrap h-full w-full lg:space-x-4 max-md:space-y-4 p-4">
                {serviceSections[activeIndex].subTabs[activeSubTab].data.map(
                  (cardData: any, cardIndex: any) => (
                    <ServiceItem
                      cardData={cardData}
                      activeIndex={activeIndex}
                      key={`card-${cardIndex}`}
                    />
                  )
                )}
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
