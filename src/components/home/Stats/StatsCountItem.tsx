"use client";
import React from "react";
import CountUp from "react-countup";

const StatsCountItem = ({ enableScrollSpy, start, end, duration }: any) => {
  return (
    <CountUp
      enableScrollSpy={enableScrollSpy}
      start={start || 0.5}
      end={end}
      duration={duration || 3}
    />
  );
};

export default React.memo(StatsCountItem);
