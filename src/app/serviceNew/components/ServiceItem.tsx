"use client";
import React from "react";
// @ts-ignore
import { Fade } from "react-reveal";
import { AiOutlineCheck } from "react-icons/ai";

const ServiceItem = ({ cardData }: any) => {
  return (
    <Fade right>
      <div className="flex flex-col space-y-4 lg:w-1/4 h-80vh p-4 shadow-lg border rounded-lg">
        <div className="w-full">
          <h2 className="font-bold py-2 border-b text-lg border-gray-700">
            {cardData.title}
          </h2>
          <p>{cardData.subtitle.toString()}</p>
        </div>
        <div className="w-full h-full">
          <button
            className="w-full border-2 border-black py-2 rounded-full shadow-lg hover:bg-black hover:text-white"
            // onClick={() => onContactClick(service)}
          >
            Contact Us
          </button>
          <div className="w-full h-full">
            <h2 className="font-semibold py-2 mt-4">{cardData.keyFeatures}:</h2>
            {cardData.features.map((feature: any) => (
              <div key={feature} className="flex w-full items-center space-x-2">
                <AiOutlineCheck className="text-green-600" size={14} />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ServiceItem;
