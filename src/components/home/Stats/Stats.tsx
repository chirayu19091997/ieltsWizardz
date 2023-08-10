import React from "react";
import StatsCountItem from "./StatsCountItem";
import { statsData } from "@/utils/constants";
import HeadingText from "@/components/HeadingText";

const Stats = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <HeadingText text="Numbers tell our story" />
        <div className="animate__animated animate__fadeInUp grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          {statsData.map((statItem, statIndex) => (
            <div key={`stats-${statIndex}`}>
              <h3 className="font-bold text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                  <StatsCountItem
                    enableScrollSpy={true}
                    end={statItem.stats}
                    duration={2}
                  />
                  +
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-gray-900">
                {statItem.title}
              </p>
              <p className="text-base mt-0.5 text-gray-500">
                {statItem.subTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
