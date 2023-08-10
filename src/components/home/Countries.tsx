import { CountriesData } from "@/utils/constants";
import React from "react";

const Countries = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="xl:flex flex-col space-y-12 xl:items-center xl:justify-between">
          <h2 className="text-4xl font-bold text-center text-gray-500 xl:text-left font-pj">
            Countries
          </h2>

          <div className="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-12">
            {CountriesData.map((country) => (
              <div
                key={`country-${country.title}`}
                className="flex flex-col items-center justify-center space-y-4 h-36"
              >
                <img
                  className="object-contain w-auto mx-auto h-32"
                  src={country.image}
                  alt=""
                />
                <p className="text-2xl">{country.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
