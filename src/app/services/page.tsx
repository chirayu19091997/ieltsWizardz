"use client";
import React, { Suspense, useState } from "react";
import ServiceItem from "./components/ServiceItem";
import { serviceSections } from "@/utils/constants";
// @ts-ignore
import { Slide } from "react-reveal";
import { useSearchParams } from "next/navigation";
import ServicesHeader from "./components/ServicesHeader";
import Loading from "../loading";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(
    Number(useSearchParams().get("serviceId")) || 0
  );
  const [activeSubTab, setActiveSubTab] = useState(0);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex relative flex-col items-center space-y-8">
        <img
          src="/oooscillate.svg"
          className="absolute object-cover opacity-20 flex w-full overflow-hidden h-full"
        />
        <h1 className="text-4xl">Our Services</h1>
        <ServicesHeader
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          activeSubTab={activeSubTab}
          setActiveSubTab={setActiveSubTab}
        />
        <div className="flex w-full h-full space-x-8 p-4">
          <Slide right spy={activeIndex}>
            <div className="flex lg:flex-row items-center justify-center max-md:flex-col flex-wrap h-full w-full max-md:space-y-4">
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
    </Suspense>
  );
};

export default Services;
