"use client";
import React from "react";
import CountUp from "react-countup";

const StatsCountItem = ({ enableScrollSpy, start, end, duration }: any) => {
  return (
    <CountUp
      enableScrollSpy={enableScrollSpy}
      start={start}
      end={end}
      duration={duration}
    />
  );
};

export default StatsCountItem;
