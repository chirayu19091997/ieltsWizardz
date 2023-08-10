import React from "react";
import HeadingText from "../HeadingText";

const LogoCloud = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 xl:flex flex-col space-y-12 xl:items-center xl:justify-between">
        <HeadingText text="Partnerships and Certifications" />

        <div className="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-12">
          <img
            className="object-contain w-auto mx-auto h-14"
            src="/pandc/bc.png"
            alt=""
          />
          <img
            className="object-contain w-auto mx-auto h-14 mix-blend-multiply"
            src="/pandc/tesol.png"
            alt=""
          />
          <img
            className="object-contain w-auto mx-auto h-14"
            src="/pandc/ets.svg"
            alt=""
          />
          <img
            className="object-contain w-auto mx-auto h-14"
            src="/pandc/idp.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
