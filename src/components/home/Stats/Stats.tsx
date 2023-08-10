import React from "react";
import StatsCountItem from "./StatsCountItem";
import { statsData } from "@/utils/constants";

const Stats = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl">
            Numbers tell our story
          </h2>
          {/* <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p> */}
        </div>
        <div className="animate__animated animate__fadeInUp grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          {statsData.map((statItem, statIndex) => (
            <div key={`stats-${statIndex}`}>
              <h3 className="font-bold text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                  <StatsCountItem
                    enableScrollSpy={true}
                    start={0.5}
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
