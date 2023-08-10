import { homeServiceSections } from "@/utils/constants";
import React from "react";

const ServicesHome = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Make every step user-centric
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Lorem ipsum dolor sit amet, consectetur adipis elit
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {homeServiceSections.map((item, index) => (
            <div
              className={`md:p-8 lg:p-14 ${
                index > 0 ? "md:border-l md:border-gray-200" : ""
              }`}
            >
              {item.logo}
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                {item.title}
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
