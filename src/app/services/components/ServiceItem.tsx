import Link from "next/link";
import React from "react";
import { IconCheck } from "@tabler/icons-react";

const ServiceItem = ({ cardData }: any) => {
  return (
    <div className="flex z-10 flex-col bg-white space-y-4 lg:w-[30%] h-screen max-md:h-full p-4 shadow-xl border rounded-lg lg:m-2 my-2">
      <div className="w-full h-40">
        <h2 className="font-extrabold py-2 border-b text-lg border-gray-700">
          {cardData.title}
        </h2>
        <p>{cardData.subtitle.toString()}</p>
      </div>
      <Link
        href={{
          pathname: "/contact",
          query: {
            message: `I want to Know More About ${cardData?.title}`,
          },
        }}
      >
        <button className="w-full border-2 border-black py-2 rounded-full shadow-lg hover:bg-black hover:text-white">
          Contact Us
        </button>
      </Link>

      <div className="flex flex-col w-full h-full overflow-y-auto noScroll">
        <h2 className="font-semibold py-2 mt-4">{cardData.keyFeatures}:</h2>
        {cardData.features.map((feature: any) => (
          <div key={feature} className="flex w-full space-x-2">
            <IconCheck
              strokeWidth={4}
              color="green"
              size={14}
              className="w-4 h-4 mt-2"
            />
            <p className="text-gray-700 w-full">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceItem;
