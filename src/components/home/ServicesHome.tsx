import { homeServiceSections } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const ServicesHome = () => {
  return (
    <section className="py-12 bg-gray-100 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 text-center sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0">
          {homeServiceSections.map((item, index) => (
            <Link
              key={`services-home-${index}`}
              href={{ pathname: "/services", query: { serviceId: index } }}
              className={`md:p-8 lg:p-14 items-center flex flex-col ${
                index > 0 ? "md:border-l md:border-gray-200" : ""
              }`}
            >
              <div className="w-14 h-14">{item.logo}</div>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                {item.title}
              </h3>
              <p className="mt-5 text-base text-justify text-gray-600 font-pj">
                {item.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
