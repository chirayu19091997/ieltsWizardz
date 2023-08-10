import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface ServiceItemProps {
  services: serviceProps[];
  isAlternate: boolean;
}

interface serviceProps {
  title: string;
  subtitle: string;
  keyFeatures: string;
  features: string[];
}

const ServiceItem = ({ services, isAlternate }: ServiceItemProps) => {
  return (
    <div
      className={`flex ${
        isAlternate ? "flex-row-reverse" : "flex-row"
      } w-full max-md:flex-col h-[80vh] lg:space-x-4 lg:p-4 bg-slate-200 rounded-lg shadow-xl`}
    >
      <div className="w-1/3 max-md:w-full max-md:h-1/4">
        <img
          className="flex-shrink-0 object-cover rounded-lg w-full h-full"
          src="/book.jpg"
          alt=""
        />
      </div>
      <div className="flex w-2/3 max-md:flex-col max-w-2/3 max-md:w-full max-md:max-w-full max-md:h-3/4 lg:space-x-4 overflow-auto noScroll">
        {services.map((service: any, serviceIndex: number) => (
          <div
            key={`service-${serviceIndex}`}
            className={`flex flex-col justify-between space-y-2 w-full h-full ${
              serviceIndex < services.length - 1
                ? "lg:border-r border-gray-400 max-md:border-b"
                : ""
            } p-4`}
          >
            <div className="w-full h-[35%]">
              <h2 className="font-semibold">{service.title}</h2>
              <p>{service.subtitle}</p>
            </div>
            <div className="w-full h-full">
              <button
                className="w-full border-2 border-black py-2 rounded-full shadow-xl hover:bg-black hover:text-white"
                // onClick={() => onContactClick(service)}
              >
                Contact Us
              </button>
              <div className="w-full">
                <h2 className="font-semibold py-2">{service.keyFeatures}:</h2>
                {service.features.map((feature: any) => (
                  <div
                    key={feature}
                    className="flex w-full items-center space-x-2"
                  >
                    <AiOutlineCheck className="text-gray-500" size={12} />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceItem;
